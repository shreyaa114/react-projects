import React, { useState } from "react";

export function FetchUser() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!userId) return;

    try {
      setError("");
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fetch User by ID</h2>

      <input
        type="number"
        value={userId}
        placeholder="Enter user ID (1–10)"
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={fetchUser}>Fetch User</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <h3>User Details</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      )}
    </div>
  );
}
