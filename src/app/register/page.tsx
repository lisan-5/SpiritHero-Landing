import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Account | Spirit Hero",
  description: "Create your free Spirit Hero account and launch your custom online merch store in minutes.",
};

export default function RegisterPage() {
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
            <h1>Create your account</h1>
            <p>Get your free custom merch store up and running in minutes.</p>
          </div>

          <form className="auth-form" action="#">
            <div className="auth-row">
              <label className="auth-label">
                <span>First name</span>
                <input type="text" placeholder="Jane" required />
              </label>
              <label className="auth-label">
                <span>Last name</span>
                <input type="text" placeholder="Doe" required />
              </label>
            </div>

            <label className="auth-label">
              <span>Organization name</span>
              <input type="text" placeholder="Lincoln High School PTA" />
            </label>

            <label className="auth-label">
              <span>Email address</span>
              <input type="email" placeholder="you@example.com" required />
            </label>

            <label className="auth-label">
              <span>Password</span>
              <input type="password" placeholder="Minimum 8 characters" required minLength={8} />
            </label>

            <label className="auth-checkbox" style={{ marginTop: 4 }}>
              <input type="checkbox" required />
              <span>
                I agree to the{" "}
                <Link href="#" className="auth-link">Terms of Service</Link>
                {" "}and{" "}
                <Link href="#" className="auth-link">Privacy Policy</Link>
              </span>
            </label>

            <button type="submit" className="auth-submit">
              Create Account
            </button>
          </form>

          <div className="auth-divider">
            <span>or sign up with</span>
          </div>

          <div className="auth-socials">
            <button type="button" className="auth-social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" className="auth-social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21.5c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
              GitHub
            </button>
          </div>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link href="/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
