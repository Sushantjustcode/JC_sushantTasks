function Delete(props) {
  return (
    <button className="btn red" onClick={() => props.onDelete(props.index)}>
      Delete
    </button>
  );
}

export default Delete;
