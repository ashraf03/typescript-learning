import express from "express";
import { issueController } from "./issue.controller";

const router = express.Router();

router.get("/", issueController.getAllIssues);
router.get("/:id", issueController.getSingleIssue);
router.patch(
  "/:id",
  auth(USER_ROLE.maintainer, USER_ROLE.contributor),
  issueController.updateIssue
);

router.delete(
  "/:id",
  auth(USER_ROLE.maintainer),
  issueController.deleteIssue
);

export default router;