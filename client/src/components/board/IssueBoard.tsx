import { ISSUE_COLUMNS } from "../../constants/issueColumns";
import { IssueColumn } from "./IssueColumn";
import type { Issue } from "../../types/issue";

type Props = {
  issues: Issue[];
  loading: boolean;
  moveStatus: (id: string, status: Issue["status"]) => void;
  openEdit: (issue: Issue) => void;
  onDelete: (id: string) => void;
};

export function IssueBoard({
  issues,
  loading,
  moveStatus,
  openEdit,
  onDelete,
}: Props) {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {ISSUE_COLUMNS.map((column) => (
        <IssueColumn
          key={column.key}
          title={column.title}
          issues={issues.filter((i) => i.status === column.key)}
          moveStatus={moveStatus}
          openEdit={openEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
