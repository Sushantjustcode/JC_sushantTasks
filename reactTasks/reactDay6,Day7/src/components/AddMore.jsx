import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const createEmptyStudent = () => ({
  name: "",
  email: "",
  age: "",
  course: "",
});


const studentFields = [
  { name: "name", label: "Full name", type: "text" },
  { name: "email", label: "Email address", type: "email" },
  { name: "age", label: "Age", type: "number", min: "16", max: "100" },
  { name: "course", label: "Course", type: "text" },
];

function AddMore({ onSubmit }) {
  const navigate = useNavigate();


//   const [addMoreData, setAddMoreData] = useState([
//     {
//       name: "",
//       email: "",
//       age: "",
//       course: "",
//     },
//   ]);

    const [addMoreData, setAddMoreData] = useState([createEmptyStudent()]);


  const handleChange = (event, index) => {
    const { name, value } = event.target;

    setAddMoreData((currentData) =>
      currentData.map((student, studentIndex) =>
        studentIndex === index ? { ...student, [name]: value } : student,
      ),
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validStudents = addMoreData
      .filter(
        (student) =>
          student.name.trim() &&
          student.email.trim() &&
          student.age !== "" &&
          student.course.trim(),
      )
      .map((student) => ({
        ...student,
        name: student.name.trim(),
        email: student.email.trim(),
        course: student.course.trim(),
        age: Number(student.age),
      }));

    if (validStudents.length === 0) return;
    onSubmit(validStudents);
    navigate("/");
  };


  const handleFormAdd = () => {
    setAddMoreData((currentData) => [
      ...currentData,createEmptyStudent()]);
  };

 const handleFormDelete = (index) => {
   setAddMoreData((students) => {
     if (students.length === 1) {
       return [createEmptyStudent()];
     }

     return students.filter((student, i) => i !== index);
   });
 };


  return (
    <section className="max-w-175">
      <Link
        to="/"
        className="text-sm font-medium text-teal-700 transition hover:text-teal-900"
      >
        Back to students
      </Link>

      <h1 className="mb-7 mt-3 text-3xl font-semibold tracking-tight text-slate-900">
        Add Multiple Students
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid max-w-140 gap-4 border border-slate-200 bg-white p-6"
      >
        {addMoreData.map((student, index) => (
          <div
            key={index}
            className="space-y-4 rounded-md border border-slate-200 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">
                Student {index + 1}
              </p>

              {addMoreData.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleFormDelete(index)}
                  className="cursor-pointer text-sm font-medium text-rose-600 hover:text-rose-800"
                >
                  Delete form
                </button>
              )}
            </div>

            {studentFields.map(({ name, label, type, min, max }) => (
              <div key={`${name}-${index}`} className="grid gap-1">
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor={`${name}-${index}`}
                >
                  {label}
                </label>

                <input
                  className="border border-slate-300 px-3 py-2.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                  id={`${name}-${index}`}
                  name={name}
                  type={type}
                  min={min}
                  max={max}
                  value={student[name]}
                  onChange={(event) => handleChange(event, index)}
                  required
                />
              </div>
            ))}
          </div>
        ))}

        <div className="mt-2 flex flex-wrap gap-3">
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
            Confirm and Add students
          </button>

          <button
            type="button"
            onClick={handleFormAdd}
            className="cursor-pointer bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            +
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddMore;
