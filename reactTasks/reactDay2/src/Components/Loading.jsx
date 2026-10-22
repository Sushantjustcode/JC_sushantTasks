function Loading() {
  return (
    <div className="mt-8 flex items-center justify-center gap-3 text-sm font-medium text-slate-500">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-blue-500" />
      Loading weather...
    </div>
  );
}

export default Loading;
