export type IssueStatus = "todo" | "in-progress" | "done";

export type IssuePriority = "low" | "medium" | "high";

export type UserRole = "user" | "admin";

export type UserType = {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt?: Date;
};

export type IssueType = {
  _id: string;
  title: string;
  description?: string;
  status: IssueStatus;
  priority: IssuePriority;
  createdBy: string | UserType;
  assignedTo?: string | UserType;
  createdAt: Date;
  updatedAt: Date;
};
