import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroArt from "../assets/login-hero.svg";
import { loginUser, saveSession } from "../api/auth.js";
import "./UserLogin.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    try {
      const session = await loginUser({ email: email.trim(), password });
      saveSession(session);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login">
      <section className="login__hero">
        <img className="login__art" src={heroArt} alt="" aria-hidden="true" />
        <h1 className="login__title">Login</h1>
      </section>

      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <input
          className="login__input"
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Enter password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />

        {error && (
          <p className="login__error" role="alert">
            {error}
          </p>
        )}

        <button className="login__button" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link className="login__link login__link--staff" to="/staff-login">
          Staff/Manager Login
        </Link>
      </form>

      <p className="login__register">
        <span>Don't have account?</span>
        <Link className="login__link" to="/register">
          Register new account
        </Link>
      </p>
    </main>
  );
}
