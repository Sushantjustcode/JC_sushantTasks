function SearchBar({ inputRef, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 rounded-2xl bg-slate-100 p-1.5"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search city..."
        className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
      />

      <button
        type="submit"
        className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 active:scale-95"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
