function SeperateForm() {
  return (
    <div className="mt-4 rounded border border-gray-200 bg-gray-50 p-3">
      <label
        htmlFor="form1"
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        Form1 Different Component
      </label>
      <input
        id="form1"
        type="text"
        placeholder="Enter the Data Form Belongs to Different Component"
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default SeperateForm;
