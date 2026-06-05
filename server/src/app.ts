import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import issueRoutes from "./routes/issue.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/issues", issueRoutes);

app.get("/", (_req, res) => {
  res.json({ message: "IssueHub API running" });
});

export default app;
