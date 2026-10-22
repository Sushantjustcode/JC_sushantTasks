import React, { useEffect, useState } from "react";
import axios from "axios";

function UserShowAxios({ id = 1 }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        setError(null);

        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (mounted) setUser(res.data);
            })
            .catch((err) => {
                if (mounted) setError(err.message || "Error fetching user");
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, [id]);

    if (loading) return <div>Loading user...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data</div>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
            <p>
                <strong>Address:</strong> {user.address?.suite} {user.address?.street}, {user.address?.city}
            </p>
        </div>
    );
}

export default UserShowAxios;
