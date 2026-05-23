

   import { createRequire } from 'module';

   const require = createRequire(import.meta.url);

  
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/config/index.ts
var import_dotenv = __toESM(require("dotenv"), 1);
var import_path = __toESM(require("path"), 1);
import_dotenv.default.config({
  path: import_path.default.join(process.cwd(), ".env")
});
var config = {
  connection_string: process.env.CONNECTIONSTRING,
  port: process.env.PORT,
  secret: process.env.JWT_SECRET,
  refresh_secret: process.env.JWT_REFRESH_SECRET
};
var config_default = config;

// src/db/index.ts
var import_pg = require("pg");
var pool = new import_pg.Pool({
  connectionString: config_default.connection_string
});
var initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'contributor',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS issues (

        id SERIAL PRIMARY KEY,
        title VARCHAR(150)NOT NULL,
        description TEXT NOT NULL
        CHECK (
          length(description) >= 20
        ),
        type VARCHAR(20) NOT NULL
        CHECK (
          type IN (
            'bug',
            'feature_request'
          )
        ),
        status VARCHAR(20)
        DEFAULT 'open'
        CHECK (
          status IN (
            'open',
            'in_progress',
            'resolved'
          )
        ),

        reporter_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log(
      "Issue table created"
    );
  } catch (error) {
    console.log(error);
  }
};

// src/db/app.ts
var import_express = __toESM(require("express"), 1);
var app = (0, import_express.default)();
app.use(import_express.default.json());
app.use(import_express.default.text());
app.use(import_express.default.urlencoded());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
var app_default = app;

// src/modules/auth/auth.route.ts
var import_express3 = __toESM(require("express"), 1);

// src/modules/auth/auth.controller.ts
var import_express2 = require("express");

// src/modules/auth/auth.service.ts
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var loginUser = async (email, password) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );
  const user = result.rows[0];
  if (!user) {
    throw new Error("User not found");
  }
  const passwordMatched = await import_bcryptjs.default.compare(
    password,
    user.password
  );
  if (!passwordMatched) {
    throw new Error(
      "Incorrect password"
    );
  }
  const jwtPayload = {
    id: user.id,
    name: user.name,
    role: user.role
  };
  const token = import_jsonwebtoken.default.sign(
    jwtPayload,
    config_default.secret,
    {
      expiresIn: "7d"
    }
  );
  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
      updated_at: user.updated_at
    }
  };
};

// src/modules/auth/auth.controller.ts
var login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(
      email,
      password
    );
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
var authController = {
  login
};

// src/modules/auth/auth.route.ts
var router = import_express3.default.Router();
router.post(
  "/login",
  authController.login
);
var authRoute = router;

// src/modules/issue/issue.route.ts
var import_express5 = __toESM(require("express"), 1);

// src/modules/issue/issue.controller.ts
var import_express4 = require("express");

// src/modules/issue/issue.service.ts
var createIssue = async (payload, reporter_id) => {
  const {
    title,
    description,
    type
  } = payload;
  const result = await pool.query(
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
var getAllIssues = async (query) => {
  const { sort = "newest", type, status } = query;
  let sql = `
    SELECT * FROM issues
    WHERE 1=1
  `;
  const values = [];
  let count = 1;
  if (type) {
    sql += ` AND type = $${count}`;
    values.push(type);
    count++;
  }
  if (status) {
    sql += ` AND status = $${count}`;
    values.push(status);
    count++;
  }
  if (sort === "oldest") {
    sql += ` ORDER BY created_at ASC`;
  } else {
    sql += ` ORDER BY created_at DESC`;
  }
  const issueResult = await pool.query(sql, values);
  const issues = issueResult.rows;
  const reporterIds = [...new Set(issues.map((i) => i.reporter_id))];
  const reporterResult = await pool.query(
    `SELECT id, name, role FROM users WHERE id = ANY($1)`,
    [reporterIds]
  );
  const reporterMap = /* @__PURE__ */ new Map();
  reporterResult.rows.forEach((user) => {
    reporterMap.set(user.id, user);
  });
  const finalData = issues.map((issue) => ({
    id: issue.id,
    title: issue.title,
    description: issue.description,
    type: issue.type,
    status: issue.status,
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    reporter: reporterMap.get(issue.reporter_id) || null
  }));
  return finalData;
};
var getSingleIssue = async (id) => {
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
  const reporterResult = await pool.query(
    `
    SELECT id, name, role
    FROM users
    WHERE id = $1
    `,
    [issue.reporter_id]
  );
  const reporter = reporterResult.rows[0] || null;
  return {
    id: issue.id,
    title: issue.title,
    description: issue.description,
    type: issue.type,
    status: issue.status,
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    reporter
  };
};
var updateIssue = async (id, user, payload) => {
  const issueResult = await pool.query(
    `SELECT * FROM issues WHERE id = $1`,
    [id]
  );
  const issue = issueResult.rows[0];
  if (!issue) {
    throw new Error("Issue not found");
  }
  if (user.role === "contributor") {
    if (issue.reporter_id !== user.id) {
      throw new Error("You cannot update this issue");
    }
    if (issue.status !== "open") {
      throw new Error("You can only update open issues");
    }
  }
  const title = payload.title || issue.title;
  const description = payload.description || issue.description;
  const type = payload.type || issue.type;
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
var deleteIssue = async (id) => {
  const issueResult = await pool.query(
    `SELECT * FROM issues WHERE id = $1`,
    [id]
  );
  const issue = issueResult.rows[0];
  if (!issue) {
    throw new Error("Issue not found");
  }
  await pool.query(
    `DELETE FROM issues WHERE id = $1`,
    [id]
  );
  return true;
};
var issueService = {
  createIssue,
  getAllIssues,
  getSingleIssue,
  updateIssue,
  deleteIssue
};

// src/modules/issue/issue.controller.ts
var createIssue2 = async (req, res) => {
  try {
    const user = req.user;
    const result = await issueService.createIssue(
      req.body,
      user.id
    );
    res.status(201).json({
      success: true,
      message: "Issue created successfully",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
var getAllIssues2 = async (req, res) => {
  try {
    const result = await issueService.getAllIssues(req.query);
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
var getSingleIssue2 = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await issueService.getSingleIssue(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Issue not found"
      });
    }
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
var updateIssue2 = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = req.user;
    const result = await issueService.updateIssue(
      id,
      user,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Issue updated successfully",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
var deleteIssue2 = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await issueService.deleteIssue(id);
    res.status(200).json({
      success: true,
      message: "Issue deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
var issueController = {
  createIssue: createIssue2,
  getAllIssues: getAllIssues2,
  getSingleIssue: getSingleIssue2,
  updateIssue: updateIssue2,
  deleteIssue: deleteIssue2
};

// src/middleware/auth.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"), 1);
var auth = (...roles) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "No token found"
        });
      }
      const decoded = import_jsonwebtoken2.default.verify(
        token,
        config_default.secret
      );
      req.user = decoded;
      if (roles.length && !roles.includes(
        decoded.role
      )) {
        return res.status(403).json({
          success: false,
          message: "Forbidden"
        });
      }
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token"
      });
    }
  };
};
var auth_default = auth;

// src/modules/types/index.ts
var USER_ROLE = {
  maintainer: "maintainer",
  contributor: "contributor"
};

// src/modules/issue/issue.route.ts
var router2 = import_express5.default.Router();
router2.get("/", issueController.getAllIssues);
router2.get("/:id", issueController.getSingleIssue);
router2.patch(
  "/:id",
  auth_default(USER_ROLE.maintainer, USER_ROLE.contributor),
  issueController.updateIssue
);
router2.delete(
  "/:id",
  auth_default(USER_ROLE.maintainer),
  issueController.deleteIssue
);
var issueRoute = router2;

// src/modules/user/user.route.ts
var import_express7 = require("express");
var import_express8 = require("express");

// src/modules/user/user.controller.ts
var import_express6 = require("express");

// src/modules/user/user.service.ts
var import_bcryptjs2 = __toESM(require("bcryptjs"), 1);
var import_jsonwebtoken3 = require("jsonwebtoken");
var createUserIntoDB = async (payload) => {
  const { name, email, password } = payload;
  const hashPassword = import_bcryptjs2.default.hashSync(password, 10);
  const result = await pool.query(
    `INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *`,
    [name, email, hashPassword]
  );
  delete result.rows[0].password;
  return result;
};
var userService = {
  createUserIntoDB
};

// src/modules/user/user.controller.ts
var createUser = async (req, res) => {
  try {
    const result = await userService.createUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error
    });
  }
};
var userController = {
  createUser
};

// src/modules/user/user.route.ts
var router3 = (0, import_express7.Router)();
router3.post("/signup", userController.createUser);
var userRoute = router3;

// src/server.ts
app_default.use("/api/auth", userRoute);
app_default.use("/api/auth", authRoute);
app_default.use("/api/issues", issueRoute);
var main = () => {
  initDB();
  app_default.listen(config_default.port, () => {
    console.log(`Example app listening on port ${config_default.port}`);
  });
};
main();
//# sourceMappingURL=server.cjs.map