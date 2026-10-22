import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import AddEditForm from "./components/AddEditForm";
import UserView from "./components/UserView";
import DeleteUser from "./components/DeleteUser";
const API_URL = "http://localhost:3000/users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      const normalizedUsers = (data.users || []).map((user) => ({
        ...user,
        id: user._id || user.id,
      }));
      setUsers(normalizedUsers);
    } catch (error) {
      console.error("Failed to load users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (userData) => {
    const payload = {
      ...userData,
      password: userData.password || "default123",
      age: Number(userData.age),
    };

    const method = userData.id ? "PUT" : "POST";
    const url = userData.id ? `${API_URL}/${userData.id}` : API_URL;

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Could not save user");
    }

    await fetchUsers();
  };

  const handleDelete = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Could not delete user");
    }

    await fetchUsers();
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <div className="app-content">
          {loading ? (
            <p className="loading-text">Loading users...</p>
          ) : (
            <Routes>
              <Route path="/" element={<Home users={users} />} />
              <Route
                path="/users/add"
                element={
                  <AddEditForm
                    mode="add"
                    users={users}
                    onSubmit={handleSubmit}
                  />
                }
              />
              <Route path="/users/:id" element={<UserView users={users} />} />
              <Route
                path="/users/:id/edit"
                element={
                  <AddEditForm
                    mode="edit"
                    users={users}
                    onSubmit={handleSubmit}
                  />
                }
              />
              <Route
                path="/users/:id/delete"
                element={<DeleteUser users={users} onDelete={handleDelete} />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
