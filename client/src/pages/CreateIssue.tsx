import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/token";

const API_URL = "https://issuehub-tzk7.onrender.com";

export default function CreateIssue() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!title.trim()) return;

    setLoading(true);

    const token = getToken();

    const res = await fetch(`${API_URL}/api/issues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (res.ok) {
      navigate("/dashboard");
    } else {
      alert(data.message || "Failed to create issue");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-slate-800 p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-6">Create Issue</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Issue title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-slate-700 outline-none"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded bg-slate-700 outline-none h-32"
          />

          <button
            onClick={handleCreate}
            disabled={loading}
            className="w-full bg-purple-600 p-2 rounded hover:bg-purple-700"
          >
            {loading ? "Creating..." : "Create Issue"}
          </button>
        </div>
      </div>
    </div>
  );
}
