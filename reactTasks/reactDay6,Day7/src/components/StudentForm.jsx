import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const blankStudent = { name: "", email: "", age: "", course: "" };

function StudentForm({ mode, students = [], onSubmit }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingStudent = students.find((student) => student.id === Number(id));
  const [student, setStudent] = useState(existingStudent || blankStudent);
  let heading = "Add Student";
  let submitText = "Add student";

  if (mode === "edit") {
    heading = "Edit Student";
    submitText = "Save changes";
  }

  const handleChange = (event) => {
    setStudent((currentStudent) => ({
      ...currentStudent,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      ...student,
      age: Number(student.age),
      ...(mode === "edit" && { id: Number(id) }),
    });
    navigate("/");
  };

  if (mode === "edit" && !existingStudent)
    return <p className="py-5">Student not found.</p>;

  return (
    <section className="max-w-175">
      <Link
        to="/"
        className="text-sm font-medium text-teal-700 transition hover:text-teal-900"
      >
        Back to students
      </Link>
      <h1 className="mb-7 mt-3 text-3xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid max-w-140 gap-4 border border-slate-200 bg-white p-6"
      >
        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700" htmlFor="name">
            Full name
          </label>
          <input
            className="border border-slate-300 px-3 py-2.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
            minLength="2"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            Email address
          </label>
          <input
            className="border border-slate-300 px-3 py-2.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            id="email"
            name="email"
            type="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium text-slate-700" htmlFor="age">
            Age
          </label>
          <input
            className="border border-slate-300 px-3 py-2.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            id="age"
            name="age"
            type="number"
            min="16"
            max="100"
            value={student.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-1">
          <label
            className="text-sm font-medium text-slate-700"
            htmlFor="course"
          >
            Course
          </label>
          <input
            className="border border-slate-300 px-3 py-2.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            id="course"
            name="course"
            value={student.course}
            onChange={handleChange}
            required
            minLength="2"
          />
        </div>
        <div className="mt-2 flex gap-3">
          <Link
            to="/"
            className="border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="cursor-pointer bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            {submitText}
          </button>
        </div>
      </form>
    </section>
  );
}

export default StudentForm;
