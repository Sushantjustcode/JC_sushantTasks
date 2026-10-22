import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const blankUser = { name: "", email: "", age: "", course: "", password: "" };

function AddEditForm({ mode, users = [], onSubmit }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingUser = users.find((user) => String(user.id) === String(id));
  const [user, setUser] = useState(existingUser || blankUser);
  let heading = "Add User";
  let submitText = "Add user";

  if (mode === "edit") {
    heading = "Edit User";
    submitText = "Save changes";
  }

  const handleChange = (event) => {
    setUser((currentUser) => ({
      ...currentUser,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onSubmit({
        ...user,
        age: Number(user.age),
        ...(mode === "edit" && { id: String(id) }),
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }
  };

  if (mode === "edit" && !existingUser)
    return <p className="emptyState">User not found.</p>;

  return (
    <section className="formPanel">
      <Link to="/" className="backLink">
        Back to users
      </Link>
      <h1 className="pageTitle formTitle">{heading}</h1>
      <form onSubmit={handleSubmit} className="userForm">
        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="name">
            Full name
          </label>
          <input
            className="formInput"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            minLength="2"
          />
        </div>
        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="email">
            Email address
          </label>
          <input
            className="formInput"
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="password">
            Password
          </label>
          <input
            className="formInput"
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder={
              mode === "edit"
                ? "Leave blank to keep current password"
                : "Enter password"
            }
          />
        </div>
        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="age">
            Age
          </label>
          <input
            className="formInput"
            id="age"
            name="age"
            type="number"
            min="16"
            max="100"
            value={user.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="fieldGroup">
          <label className="fieldLabel" htmlFor="course">
            Course
          </label>
          <input
            className="formInput"
            id="course"
            name="course"
            value={user.course}
            onChange={handleChange}
            required
            minLength="2"
          />
        </div>
        <div className="formActions">
          <Link to="/" className="secondaryButton">
            Cancel
          </Link>
          <button type="submit" className="primaryButton submitButton">
            {submitText}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddEditForm;
