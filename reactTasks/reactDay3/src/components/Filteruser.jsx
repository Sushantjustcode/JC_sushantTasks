function Filteruser({ statusFilter, setStatusFilter }) {
  return (
    <div className="flex items-center gap-3 md:justify-end w-full md:w-auto">
      <label className="text-sm font-semibold text-slate-700">Filter:</label>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
}

export default Filteruser;
