import { useNavigate } from "react-router-dom";
import { IssueBoard } from "../components/board/IssueBoard";
import { useIssues } from "../hooks/useIssues";
import { logout } from "../utils/token";

export default function Dashboard() {
  const navigate = useNavigate();

  const {
    issues,
    loading,
    moveStatus,
    openEdit,
    onDelete,
    editingIssue,
    editTitle,
    editDescription,
    setEditTitle,
    setEditDescription,
    saveEdit,
    setEditingIssue,
  } = useIssues();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Issue Board</h1>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/create")}
              className="bg-purple-600 px-4 py-2 rounded"
            >
              + Create
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {/* BOARD */}
        <IssueBoard
          issues={issues}
          loading={loading}
          moveStatus={moveStatus}
          openEdit={openEdit}
          onDelete={onDelete}
        />

        {/* EDIT MODAL */}
        {editingIssue && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-slate-800 p-6 rounded w-[420px]">
              <h2 className="text-xl mb-4">Edit Issue</h2>

              <input
                className="w-full p-2 mb-2 bg-slate-700 rounded"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <textarea
                className="w-full p-2 mb-4 bg-slate-700 rounded h-28"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />

              <div className="flex gap-2">
                <button
                  onClick={() => setEditingIssue(null)}
                  className="w-full bg-gray-600 p-2 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={saveEdit}
                  className="w-full bg-purple-600 p-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
