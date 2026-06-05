import { Request, Response } from "express";
import { Issue } from "../models/Issue";

// CREATE ISSUE
export const createIssue = async (req: any, res: Response) => {
  try {
    const { title, description, priority } = req.body;

    const issue = await Issue.create({
      title,
      description,
      priority,
      createdBy: req.user.id,
    });

    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ message: "Error creating issue" });
  }
};

// GET ALL ISSUES (for logged-in user)
export const getIssues = async (req: any, res: Response) => {
  try {
    const issues = await Issue.find({ createdBy: req.user.id });
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: "Error fetching issues" });
  }
};

// GET SINGLE ISSUE
export const getIssue = async (req: any, res: Response) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    res.json(issue);
  } catch (error) {
    res.status(500).json({ message: "Error fetching issue" });
  }
};

// UPDATE ISSUE
export const updateIssue = async (req: any, res: Response) => {
  try {
    const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(issue);
  } catch (error) {
    res.status(500).json({ message: "Error updating issue" });
  }
};

// DELETE ISSUE
export const deleteIssue = async (req: any, res: Response) => {
  try {
    await Issue.findByIdAndDelete(req.params.id);
    res.json({ message: "Issue deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting issue" });
  }
};
