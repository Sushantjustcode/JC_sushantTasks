function ErrorMessage({ message }) {
  return (
    <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
      ❌ {message}
    </p>
  );
}

export default ErrorMessage;
