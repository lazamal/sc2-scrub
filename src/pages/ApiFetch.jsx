import React, { useEffect, useState } from "react";

export default function ApiFetch() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the logged-in Battle.net profile from backend
    fetch("http://localhost:4000/profile", {
      credentials: "include", // send cookies for session
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Battle.net Auth Demo</h1>

      {user ? (
        <div>
          <p>Signed in as: {user.battletag || user.id || "unknown"}</p>
          <pre style={{ maxWidth: 600 }}>{JSON.stringify(user, null, 2)}</pre>
          <a href="http://localhost:4000/logout">Logout</a>
        </div>
      ) : (
        <div>
          <a href="http://localhost:4000/oauth/battlenet">
            Login with Battle.net
          </a>
        </div>
      )}
    </div>
  );
}
