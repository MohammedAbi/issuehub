import type { Issue } from "../../types/issue";

type Props = {
  issue: Issue;
  moveStatus: (id: string, status: Issue["status"]) => void;
  openEdit: (issue: Issue) => void;
  onDelete: (id: string) => void;
};

export function IssueCard({ issue, moveStatus, openEdit, onDelete }: Props) {
  const nextStatus: Record<Issue["status"], Issue["status"]> = {
    todo: "in-progress",
    "in-progress": "done",
    done: "todo",
  };
  const next = nextStatus[issue.status];

  const handleMove = () => {
    moveStatus(issue._id, next);
  };
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this issue?",
    );
    if (!confirmed) return;

    onDelete(issue._id);
  };

  return (
    <div className="bg-slate-700 p-4 rounded-lg">
      <h3 className="font-semibold">{issue.title}</h3>

      <p className="text-sm text-gray-300">{issue.description}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={handleMove}
          className="text-xs px-2 py-1 bg-yellow-500 rounded"
        >
          {next}
        </button>

        <button
          onClick={() => openEdit(issue)}
          className="text-xs px-2 py-1 bg-blue-500 rounded"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="text-xs px-2 py-1 bg-red-500 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
