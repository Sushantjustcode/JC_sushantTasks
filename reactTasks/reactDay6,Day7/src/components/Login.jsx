import { useState } from "react";

const DEMO_USERNAME = "admin";
const DEMO_PASSWORD = "admin123";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      onLogin();
      return;
    }
    setError("Invalid username or password.");
  };

  return (
    <main className="grid min-h-screen place-items-center p-5">
      <section className="w-full max-w-95 border border-slate-200 bg-white p-7">
        <p className="mb-2 text-sm font-medium text-teal-700">Campus desk</p>
        <h1 className="mb-7 text-3xl font-semibold tracking-tight text-slate-900">
          Welcome back
        </h1>
        <form onSubmit={handleSubmit} className="grid gap-2.5">
          <label
            className="text-sm font-medium text-slate-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="border border-slate-300 px-3 py-2.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <label
            className="text-sm font-medium text-slate-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border border-slate-300 px-3 py-2.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {error && (
            <p className="border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="mt-3 cursor-pointer bg-teal-700 px-3 py-2.5 font-semibold text-white transition hover:bg-teal-800"
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
