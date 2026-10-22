import { useState } from "react";

function Adduser({ user, setUser }) {
  const [btnClicked, setBtnClicked] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: "Active",
    dateOfBirth: "",
    course: "",
  });

  function handleChange(e) {
    // const { name, value } = e.target;
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleClick() {
    setBtnClicked(true);
  }

  function formBtn(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData,
    };

    setUser([...user, newUser]);

    console.log("User added:", newUser);
    console.log("All users:", user);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      status: "Active",
      dateOfBirth: "",
      course: "",
    });

    setBtnClicked(false);
  }

  return (
    <>
      <div className="flex justify-end mb-5">
        <button
          className="bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          onClick={handleClick}
        >
          + Add Student
        </button>
      </div>

      {btnClicked && (
        <form
          className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-8 mb-8"
          onSubmit={formBtn}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Add New Student
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Enter the student's information below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="">Select Course</option>
                <option value="Btech">Btech</option>
                <option value="BCA">BCA</option>
                <option value="BSc">BSc</option>
                <option value="Mtech">Mtech</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option value="B.Com">B.Com</option>
                <option value="M.Com">M.Com</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-7 pt-5 border-t border-slate-200">
            <button
              type="submit"
              disabled={
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.password ||
                !formData.confirmPassword ||
                !formData.status ||
                !formData.dateOfBirth ||
                !formData.course
              }
              className="addUserSubmitBtn bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all duration-200 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:shadow-none"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => setBtnClicked(false)}
              className="bg-slate-200 hover:bg-slate-300 active:scale-95 text-slate-700 font-semibold px-6 py-2.5 rounded-lg transition-all duration-200"
            >
              Close
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Adduser;
