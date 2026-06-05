import express from "express";
import {
  createIssue,
  getIssues,
  getIssue,
  updateIssue,
  deleteIssue,
} from "../controllers/issue.controller";

import { auth } from "../middleware/auth.middleware";

const router = express.Router();

// ISSUE CRUD (protected routes)
router.post("/", auth, createIssue);
router.get("/", auth, getIssues);
router.get("/:id", auth, getIssue);
router.put("/:id", auth, updateIssue);
router.delete("/:id", auth, deleteIssue);

export default router;
