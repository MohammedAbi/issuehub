import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { setToken } from "../utils/token";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const res = await loginUser({ email, password });

    setLoading(false);

    if (res.token) {
      setToken(res.token);
      navigate("/dashboard");
    } else {
      alert(res.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="w-full max-w-md bg-slate-800 p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-slate-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-slate-700 outline-none"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-purple-600 p-2 rounded hover:bg-purple-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <p className="text-center mt-4 text-sm">
          No account?{" "}
          <Link to="/register" className="text-purple-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
