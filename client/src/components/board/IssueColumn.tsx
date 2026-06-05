import { IssueCard } from "./IssueCard";
import type { Issue } from "../../types/issue";

type Props = {
  title: string;
  issues: Issue[];
  moveStatus: (id: string, status: Issue["status"]) => void;
  openEdit: (issue: Issue) => void;
  onDelete: (id: string) => void;
};

export function IssueColumn({
  title,
  issues,
  moveStatus,
  openEdit,
  onDelete,
}: Props) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <h2 className="font-bold mb-3">{title}</h2>

      <div className="space-y-3">
        {issues.map((issue) => (
          <IssueCard
            key={issue._id}
            issue={issue}
            moveStatus={moveStatus}
            openEdit={openEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
