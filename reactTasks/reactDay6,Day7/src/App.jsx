import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import DeleteStudent from "./components/DeleteStudent";
import Home from "./components/Home";
import Login from "./components/Login";
import StudentForm from "./components/StudentForm";
import StudentView from "./components/StudentView";
import AddMore from "./components/AddMore";

const initialStudents = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    age: 20,
    course: "Computer Science",
  },
  {
    id: 2,
    name: "Diya Patel",
    email: "diya@example.com",
    age: 21,
    course: "Business Administration",
  },
  {
    id: 3,
    name: "Kabir Singh",
    email: "kabir@example.com",
    age: 19,
    course: "Graphic Design",
  },
];

function Page({ children, onLogout }) {
  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      <aside className="w-full border-b border-slate-200 bg-white p-6 sm:w-60 sm:border-r sm:border-b-0">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            Campus desk
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Student Management
          </h2>
        </div>
        <nav className="grid gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-teal-50 text-teal-800"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/students/add"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-teal-50 text-teal-800"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Add Student
          </NavLink>

          <NavLink
            to="/students/addmore"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-teal-50 text-teal-800"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Add Multiple Students
          </NavLink>
        </nav>
        <button
          type="button"
          onClick={onLogout}
          className="mt-8 cursor-pointer border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Logout
        </button>
      </aside>
      <main className="w-full max-w-275 p-5 sm:p-10">{children}</main>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (student) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      { ...student, id: Date.now() },
    ]);
  };

  const addMultipleStudents = (studentList) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      ...studentList.map((student, index) => ({
        ...student,
        age: Number(student.age),
        id: Date.now() + index,
      })),
    ]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        }
        return student;
      }),
    );
  };

  const deleteStudent = (id) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id),
    );
  };

  const getLoginPage = () => {
    if (isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  };

  const getPage = (content) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return <Page onLogout={() => setIsAuthenticated(false)}>{content}</Page>;
  };

  const getUnknownPage = () => {
    if (isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={getLoginPage()} />
        <Route path="/" element={getPage(<Home students={students} />)} />
        <Route
          path="/students/add"
          element={getPage(<StudentForm mode="add" onSubmit={addStudent} />)}
        />
        <Route
          path="/students/:id/edit"
          element={getPage(
            <StudentForm
              mode="edit"
              students={students}
              onSubmit={updateStudent}
            />,
          )}
        />
        <Route
          path="/students/:id"
          element={getPage(<StudentView students={students} />)}
        />
        <Route
          path="/students/:id/delete"
          element={getPage(
            <DeleteStudent students={students} onDelete={deleteStudent} />,
          )}
        />
        <Route path="*" element={getUnknownPage()} />

        <Route
          path="/students/addmore"
          element={getPage(<AddMore onSubmit={addMultipleStudents} />)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
