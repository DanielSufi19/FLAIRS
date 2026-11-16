import { Navigate, Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin.jsx";

// Temporary stand-ins until the other Figma screens are built
const Placeholder = ({ title }) => (
  <p style={{ padding: 24, fontFamily: "sans-serif" }}>{title} (coming soon)</p>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<Placeholder title="Register" />} />
      <Route path="/staff-login" element={<Placeholder title="Admin Login" />} />
      <Route path="/dashboard" element={<Placeholder title="Passenger Dashboard" />} />
    </Routes>
  );
}
