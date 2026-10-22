import { Link } from "react-router-dom";

function Home({ students }) {
  return (
    <>
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium text-teal-700">Overview</p>
          <h1 className="m-0 text-3xl font-semibold tracking-tight text-slate-900">
            Students
          </h1>
        </div>
        <div className="flex justify-between gap-4">
          <Link
            className="bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            to="/students/add"
          >
            Add student
          </Link>
          <Link
            className="bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            to="/students/addmore"
          >
            Add Mutliple students
          </Link>
        </div>
      </header>
      <section className="w-full overflow-hidden border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-slate-50/80">
              <tr className="border-b border-slate-200">
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Student
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Course
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Age
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  className="border-b border-slate-100 transition-colors last:border-0 hover:bg-teal-50/40"
                  key={student.id}
                >
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">
                      {student.name}
                    </strong>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    {student.email}
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    {student.course}
                  </td>
                  <td className="p-4 text-sm text-slate-600">{student.age}</td>
                  <td className="p-4">
                    <div className="flex gap-3 text-sm font-medium">
                      <Link
                        to={`/students/${student.id}`}
                        className="text-teal-700 transition hover:text-teal-900"
                      >
                        View
                      </Link>
                      <Link
                        to={`/students/${student.id}/edit`}
                        className="text-slate-600 transition hover:text-slate-900"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/students/${student.id}/delete`}
                        className="text-rose-600 transition hover:text-rose-800"
                      >
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Home;
