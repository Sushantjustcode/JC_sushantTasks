import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    if (count <= 0) {
      setCount((count = 0));
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="w-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-50">
              <h1 className="text-4xl font-semibold tabular-nums text-slate-700">
                {count}
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={add}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-2xl font-medium text-emerald-600 transition-colors hover:bg-emerald-100 active:scale-95"
            >
              +
            </button>

            <button
              onClick={sub}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50 text-2xl font-medium text-rose-600 transition-colors hover:bg-rose-100 active:scale-95"
            >
              −
            </button>

            <button
              onClick={reset}
              className="h-12 rounded-lg bg-slate-50 px-4 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 active:scale-95"
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
