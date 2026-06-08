import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reset Password | Spirit Hero",
  description: "Reset your Spirit Hero account password.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="auth-page">
      <div className="auth-glow auth-glow-1"></div>
      <div className="auth-glow auth-glow-2"></div>

      <div className="auth-container">
        <Link href="/" className="auth-brand" aria-label="Spirit Hero home">
          <span className="auth-brand-mark">SH</span>
          <span className="auth-brand-name">SpiritHero.com</span>
        </Link>

        <div className="auth-card">
          <div className="auth-card-header">
            <h1>Reset your password</h1>
            <p>Enter your email and we&apos;ll send you a link to reset your password.</p>
          </div>

          <form className="auth-form" action="#">
            <label className="auth-label">
              <span>Email address</span>
              <input type="email" placeholder="you@example.com" required />
            </label>

            <button type="submit" className="auth-submit">
              Send Reset Link
            </button>
          </form>

          <p className="auth-footer">
            Remembered your password?{" "}
            <Link href="/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
