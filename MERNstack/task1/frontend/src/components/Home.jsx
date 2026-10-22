import { Link } from "react-router-dom";

function Home({ users }) {
  return (
    <>
      <header className="pageHeader">
        <div>
          <p className="eyebrow">Overview</p>
          <h1 className="pageTitle">users</h1>
        </div>
        <Link className="primaryButton" to="/users/add">
          Add user
        </Link>
      </header>

      <section className="tablePanel">
        <div className="tableWrapper">
          <table className="userTable">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Course</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <strong className="tableName">{user.name}</strong>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.course}</td>
                  <td>{user.age}</td>
                  <td>
                    <div className="tableActions">
                      <Link to={`/users/${user.id}`} className="linkPrimary">
                        View
                      </Link>
                      <Link to={`/users/${user.id}/edit`} className="linkMuted">
                        Edit
                      </Link>
                      <Link
                        to={`/users/${user.id}/delete`}
                        className="linkDanger"
                      >
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Home;
