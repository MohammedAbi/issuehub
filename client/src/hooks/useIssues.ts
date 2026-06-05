import { useEffect, useState } from "react";
import type { Issue } from "../types/issue";
import { issueService } from "../services/issueService";
import { toast } from "react-toastify";

export function useIssues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  // ---------------- EDIT STATE ----------------
  const [editingIssue, setEditingIssue] = useState<Issue | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // ---------------- FETCH ----------------
  useEffect(() => {
    const loadIssues = async () => {
      try {
        const res = await issueService.getAll();

        const data = res.data;

        // safety check (prevents filter/map crashes)
        setIssues(Array.isArray(data) ? data : []);
      } catch (err: any) {
        console.error(err);
        toast.error(
          err?.response?.status === 401
            ? "Unauthorized (login required)"
            : "Failed to load issues",
        );
        setIssues([]);
      } finally {
        setLoading(false);
      }
    };

    loadIssues();
  }, []);

  // ---------------- MOVE STATUS ----------------
  const moveStatus = async (id: string, status: Issue["status"]) => {
    try {
      await issueService.update(id, { status });

      setIssues((prev) =>
        prev.map((i) => (i._id === id ? { ...i, status } : i)),
      );

      toast.success(`Moved to ${status}`);
    } catch {
      toast.error("Failed to update status");
    }
  };

  // ---------------- OPEN EDIT ----------------
  const openEdit = (issue: Issue) => {
    setEditingIssue(issue);
    setEditTitle(issue.title);
    setEditDescription(issue.description);
  };

  // ---------------- SAVE EDIT ----------------
  const saveEdit = async () => {
    if (!editingIssue) return;

    try {
      const res = await issueService.update(editingIssue._id, {
        title: editTitle,
        description: editDescription,
      });

      const updated = res.data;

      setIssues((prev) =>
        prev.map((i) => (i._id === editingIssue._id ? updated : i)),
      );

      setEditingIssue(null);
      toast.success("Issue updated");
    } catch {
      toast.error("Failed to update issue");
    }
  };

  // ---------------- DELETE ----------------
  const onDelete = async (id: string) => {
    try {
      await issueService.delete(id);

      setIssues((prev) => prev.filter((i) => i._id !== id));

      toast.success("Issue deleted");
    } catch {
      toast.error("Failed to delete issue");
    }
  };

  return {
    // data
    issues,
    loading,

    // actions
    moveStatus,
    openEdit,
    onDelete,
    saveEdit,

    // edit state (for modal UI)
    editingIssue,
    setEditingIssue,
    editTitle,
    setEditTitle,
    editDescription,
    setEditDescription,
  };
}
