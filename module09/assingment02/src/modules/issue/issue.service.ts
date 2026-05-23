import {pool} from "../../db";

const createIssue = async (
  payload: {
    title: string;
    description: string;
    type: string;
  },
  reporter_id: number
) => {

  const {
    title,
    description,
    type
  } = payload;

  const result =
    await pool.query(
      `
      INSERT INTO issues
      (
        title,
        description,
        type,
        reporter_id
      )

      VALUES($1,$2,$3,$4)

      RETURNING *
      `,
      [
        title,
        description,
        type,
        reporter_id
      ]
    );

   return result.rows[0];
};

const getAllIssues = async (query: any) => {
  const { sort = "newest", type, status } = query;

  // 1. Base SQL
  let sql = `
    SELECT * FROM issues
    WHERE 1=1
  `;

  const values: any[] = [];
  let count = 1;

  // 2. Filter: type
  if (type) {
    sql += ` AND type = $${count}`;
    values.push(type);
    count++;
  }

  // 3. Filter: status
  if (status) {
    sql += ` AND status = $${count}`;
    values.push(status);
    count++;
  }

  // 4. Sorting
  if (sort === "oldest") {
    sql += ` ORDER BY created_at ASC`;
  } else {
    sql += ` ORDER BY created_at DESC`;
  }

  // 5. Get issues
  const issueResult = await pool.query(sql, values);
  const issues = issueResult.rows;

  // 6. Get reporter IDs
  const reporterIds = [...new Set(issues.map((i: { reporter_id: any; }) => i.reporter_id))];

  // 7. Fetch all reporters in ONE query (important optimization)
  const reporterResult = await pool.query(
    `SELECT id, name, role FROM users WHERE id = ANY($1)`,
    [reporterIds]
  );

  const reporterMap = new Map();
  reporterResult.rows.forEach((user: { id: any; }) => {
    reporterMap.set(user.id, user);
  });

  // 8. Merge data
  const finalData = issues.map((issue: { id: any; title: any; description: any; type: any; status: any; created_at: any; updated_at: any; reporter_id: any; }) => ({
    id: issue.id,
    title: issue.title,
    description: issue.description,
    type: issue.type,
    status: issue.status,
    created_at: issue.created_at,
    updated_at: issue.updated_at,

    reporter: reporterMap.get(issue.reporter_id) || null,
  }));

  return finalData;
};

const getSingleIssue = async (id: number) => {

  // 1. Get issue by id
  const issueResult = await pool.query(
    `
    SELECT * FROM issues
    WHERE id = $1
    `,
    [id]
  );

  const issue = issueResult.rows[0];

  if (!issue) {
    return null;
  }

  // 2. Get reporter details separately
  const reporterResult = await pool.query(
    `
    SELECT id, name, role
    FROM users
    WHERE id = $1
    `,
    [issue.reporter_id]
  );

  const reporter = reporterResult.rows[0] || null;

  // 3. Merge data
  return {
    id: issue.id,
    title: issue.title,
    description: issue.description,
    type: issue.type,
    status: issue.status,
    created_at: issue.created_at,
    updated_at: issue.updated_at,

    reporter,
  };
};

const updateIssue = async (
  id: number,
  user: any,
  payload: any
) => {

  // 1. Find issue
  const issueResult = await pool.query(
    `SELECT * FROM issues WHERE id = $1`,
    [id]
  );

  const issue = issueResult.rows[0];

  if (!issue) {
    throw new Error("Issue not found");
  }

  // 2. ROLE CHECK
  if (user.role === "contributor") {

    // ownership check
    if (issue.reporter_id !== user.id) {
      throw new Error("You cannot update this issue");
    }

    // status restriction
    if (issue.status !== "open") {
      throw new Error("You can only update open issues");
    }
  }

  // 3. Prepare update fields (partial update)
  const title = payload.title || issue.title;
  const description = payload.description || issue.description;
  const type = payload.type || issue.type;

  // 4. Update query
  const updatedResult = await pool.query(
    `
    UPDATE issues
    SET
      title = $1,
      description = $2,
      type = $3,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $4
    RETURNING *
    `,
    [title, description, type, id]
  );

  return updatedResult.rows[0];
};

const deleteIssue = async (id: number) => {

  // 1. Check if issue exists
  const issueResult = await pool.query(
    `SELECT * FROM issues WHERE id = $1`,
    [id]
  );

  const issue = issueResult.rows[0];

  if (!issue) {
    throw new Error("Issue not found");
  }

  // 2. Delete issue
  await pool.query(
    `DELETE FROM issues WHERE id = $1`,
    [id]
  );

  return true;
};

export const issueService={
 createIssue,
 getAllIssues,
 getSingleIssue,
 updateIssue,
 deleteIssue
}