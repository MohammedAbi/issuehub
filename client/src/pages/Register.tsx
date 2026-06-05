import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="w-full max-w-md bg-slate-800 p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded bg-slate-700 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-slate-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-slate-700 outline-none"
          />

          <button className="w-full bg-purple-600 p-2 rounded hover:bg-purple-700">
            Create Account
          </button>
        </div>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-purple-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
