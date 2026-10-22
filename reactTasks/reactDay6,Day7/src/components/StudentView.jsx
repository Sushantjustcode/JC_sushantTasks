import { Link, useParams } from "react-router-dom";

function StudentView({ students }) {
  const { id } = useParams();
  const student = students.find((item) => item.id === Number(id));

  if (!student) return <p className="py-5">Student not found.</p>;

  return (
    <section className="max-w-175">
      <Link
        to="/"
        className="text-sm font-medium text-teal-700 transition hover:text-teal-900"
      >
        Back to students
      </Link>
      <div className="mb-7 mt-3 flex items-end justify-between gap-5">
        <h1 className="m-0 text-3xl font-semibold tracking-tight text-slate-900">
          {student.name}
        </h1>
        <Link
          className="text-sm font-medium text-teal-700 transition hover:text-teal-900"
          to={`/students/${student.id}/edit`}
        >
          Edit
        </Link>
      </div>
      <div className="grid gap-4 border border-slate-200 bg-white p-6">
        <div className="border-b border-slate-100 pb-3">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Full name
          </span>
          <strong className="font-semibold text-slate-900">
            {student.name}
          </strong>
        </div>
        <div className="border-b border-slate-100 pb-3">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Email address
          </span>
          <strong className="font-semibold text-slate-900">
            {student.email}
          </strong>
        </div>
        <div className="border-b border-slate-100 pb-3">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Age
          </span>
          <strong className="font-semibold text-slate-900">
            {student.age} years
          </strong>
        </div>
        <div>
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Course
          </span>
          <strong className="font-semibold text-slate-900">
            {student.course}
          </strong>
        </div>
      </div>
    </section>
  );
}

export default StudentView;
