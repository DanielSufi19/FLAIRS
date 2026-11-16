// Talks to the Node.js backend. In dev, Vite proxies /api to http://localhost:3000
const API_URL = import.meta.env.VITE_API_URL || "";

export async function loginUser({ email, password }) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // response had no JSON body
  }

  if (!res.ok) {
    // Matches the use case exceptions: wrong password / account not found
    throw new Error(data?.message || "Incorrect email or password.");
  }

  // Expected: { token, user: { user_id, name, email, role } }
  return data;
}

export function saveSession({ token, user }) {
  localStorage.setItem("flairs_token", token);
  localStorage.setItem("flairs_user", JSON.stringify(user));
}
