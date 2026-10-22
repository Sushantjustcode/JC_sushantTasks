import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteStudent({ students, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((item) => item.id === Number(id));

  if (!student) return <p className="py-5">Student not found.</p>;

  const handleDelete = () => {
    onDelete(student.id);
    navigate("/");
  };

  return (
    <section className="max-w-140 border border-rose-200 bg-white p-6">
      <p className="mb-2 text-sm font-medium text-rose-700">Remove record</p>
      <h1 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900">
        Delete {student.name}?
      </h1>
      <p className="mb-6 text-sm leading-6 text-slate-600">
        This action will permanently remove this student from the list.
      </p>
      <div className="mt-2 flex gap-3">
        <Link
          to="/"
          className="border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Keep record
        </Link>
        <button
          type="button"
          className="cursor-pointer bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700"
          onClick={handleDelete}
        >
          Delete student
        </button>
      </div>
    </section>
  );
}

export default DeleteStudent;
