import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteUser({ users, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((item) => String(item.id) === String(id));

  if (!user) return <p className="emptyState">User not found.</p>;

  const handleDelete = async () => {
    try {
      await onDelete(user.id);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message || "Could not delete user");
    }
  };

  return (
    <section className="deletePanel">
      <p className="deleteLabel">Remove record</p>
      <h1 className="deleteTitle">Delete {user.name}?</h1>
      <p className="deleteText">
        This action will permanently remove this user from the list.
      </p>
      <div className="formActions">
        <Link to="/" className="secondaryButton">
          Keep record
        </Link>
        <button type="button" className="dangerButton" onClick={handleDelete}>
          Delete user
        </button>
      </div>
    </section>
  );
}

export default DeleteUser;
