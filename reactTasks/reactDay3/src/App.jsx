import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Adduser from "./components/Adduser";
import Deleteuser from "./components/Deleteuser";
import Edituser from "./components/Edituser";
import Filteruser from "./components/Filteruser";
import SearchBar from "./components/SearchBar";
import Viewuser from "./components/Viewuser";

function App() {
  const [user, setUser] = useState(() => {
    const savedUsers = localStorage.getItem("students");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(user));
  }, [user]);

  const filteredUsers = user.filter((u) => {
    const fullName = `${u.firstName || ""} ${u.lastName || ""}`.trim();
    const matchesSearch =
      searchTerm.trim() === "" ||
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (u.email || "").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      statusFilter === "All" || u.status === statusFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div className="bg-indigo-800 text-white py-8 px-6 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center tracking-wide">
          Student Management System
        </h1>
      </div>

      <div className="StudentTable min-h-screen bg-slate-100 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <span className="items-center">
            <Adduser setUser={setUser} user={user} />
          </span>
          <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-2/3">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <Filteruser
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
          </div>


          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                      First Name
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                      Last Name
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-center">
                      View
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-center">
                      Edit
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-center">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {filteredUsers?.map((u, index) => (
                    <tr
                      key={u.id || index}
                      className="hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-slate-700 font-medium">
                        {u.firstName}
                      </td>

                      <td className="px-6 py-4 text-slate-700 font-medium">
                        {u.lastName}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <Viewuser user={u} />
                      </td>

                      <td className="px-6 py-4 text-center">
                        <Edituser user={u} users={user} setUser={setUser} />
                      </td>

                      <td className="px-6 py-4 text-center">
                        <Deleteuser
                          setUser={setUser}
                          users={user}
                          userId={u.id}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUsers?.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-slate-400 text-lg">No students found</p>
                <p className="text-slate-400 text-sm mt-1">
                  Try another search or filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
