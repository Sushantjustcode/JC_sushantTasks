function Deleteuser({ users = [], setUser, userId }) {
  function btnHandler() {
    const updatedUsers = users.filter((u) => u.id !== userId);

    setUser(updatedUsers);
    localStorage.setItem("students", JSON.stringify(updatedUsers));
  }

  return (
    <div>
      <button
        onClick={btnHandler}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete User
      </button>
    </div>
  );
}

export default Deleteuser;
