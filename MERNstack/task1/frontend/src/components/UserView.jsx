import { Link, useParams } from "react-router-dom";

function UserView({ users }) {
  const { id } = useParams();
  const user = users.find((item) => String(item.id) === String(id));

  if (!user) return <p className="emptyState">User not found.</p>;

  return (
    <section className="detailPanel">
      <Link to="/" className="backLink">
        Back to users
      </Link>
      <div className="detailHeader">
        <h1 className="pageTitle">{user.name}</h1>
        <Link className="inlineLink" to={`/users/${user.id}/edit`}>
          Edit
        </Link>
      </div>
      <div className="detailCard">
        <div className="detailRow">
          <span className="detailLabel">Full name</span>
          <strong className="detailValue">{user.name}</strong>
        </div>
        <div className="detailRow">
          <span className="detailLabel">Email address</span>
          <strong className="detailValue">{user.email}</strong>
        </div>
        <div className="detailRow">
          <span className="detailLabel">Age</span>
          <strong className="detailValue">{user.age} years</strong>
        </div>
        <div className="detailRow detailRowLast">
          <span className="detailLabel">Course</span>
          <strong className="detailValue">{user.course}</strong>
        </div>
      </div>
    </section>
  );
}

export default UserView;
