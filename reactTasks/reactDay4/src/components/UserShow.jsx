import { useEffect, useState } from "react";
import Loading from "./Loading";
import "tailwindcss";

function Usershow({ userId, setUserId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }
          return response.json();
        })
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1200);

    return () => clearTimeout(timer);
  }, [userId]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-neutral-200 p-4">
        <p className="rounded-xl bg-red-100 px-5 py-4 text-sm font-medium text-red-600 shadow-sm">
          Error: {error}
        </p>
      </div>
    );
  }

  if (!user) return null;

  const prevUser = () => {
    if (typeof setUserId === "function" && userId > 1) setUserId(userId - 1);
  };

  const nextUser = () => {
    if (typeof setUserId === "function" && userId < 10) setUserId(userId + 1);
  };

  return (
    <div className="flex w-full justify-center bg-neutral-200 p-6">
      <div className="w-56 overflow-hidden rounded-xl bg-neutral-300 p-4 shadow-md">
        <div className="mb-4 flex h-32 w-full items-center justify-center rounded-md bg-neutral-400/50">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-500 text-2xl font-semibold text-white shadow-sm">
            {user.name.charAt(0)}
          </div>
        </div>


        <div className="flex flex-col gap-2">
          <div className="rounded-md bg-neutral-400/50 px-3 py-2">
            <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-600">
              Name
            </p>
            <p className="truncate text-sm font-semibold text-neutral-800">
              {user.name}
            </p>
          </div>

          <div className="rounded-md bg-neutral-400/50 px-3 py-2">
            <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-600">
              Email
            </p>
            <p className="truncate text-xs font-medium text-neutral-700">
              {user.email}
            </p>
          </div>

          <div className="rounded-md bg-neutral-400/50 px-3 py-2">
            <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-600">
              Phone
            </p>
            <p className="truncate text-xs font-medium text-neutral-700">
              {user.phone}
            </p>
          </div>

          <div className="rounded-md bg-neutral-400/50 px-3 py-2">
            <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-600">
              Website
            </p>
            <p className="truncate text-xs font-medium text-neutral-700">
              {user.website}
            </p>
          </div>
        </div>


        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            onClick={prevUser}
            disabled={userId <= 1}
            className="flex-1 rounded-md bg-neutral-400 px-2 py-2 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <span className="text-xs font-semibold text-neutral-600">
            {userId}/10
          </span>

          <button
            onClick={nextUser}
            disabled={userId >= 10}
            className="flex-1 rounded-md bg-neutral-400 px-2 py-2 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Usershow;
