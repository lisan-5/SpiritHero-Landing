import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Cart | Spirit Hero",
  description: "Review the items in your Spirit Hero cart before checking out.",
};

export default function CartPage() {
  return (
    <div className="auth-page">
      <div className="auth-glow auth-glow-1"></div>
      <div className="auth-glow auth-glow-2"></div>

      <div className="auth-container">
        <Link href="/" className="auth-brand" aria-label="Spirit Hero home">
          <span className="auth-brand-mark">SH</span>
          <span className="auth-brand-name">SpiritHero.com</span>
        </Link>

        <div className="auth-card" style={{ maxWidth: 640 }}>
          <div className="auth-card-header">
            <h1>Your Cart</h1>
            <p>Review your items before checkout.</p>
          </div>

          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2 style={{ fontSize: "1.5rem", marginTop: 16 }}>Your cart is empty</h2>
            <p style={{ color: "var(--muted)", marginTop: 8, lineHeight: 1.6 }}>
              Browse our stores to find custom merch for your school, team, or organization.
            </p>
            <Link href="/" className="auth-submit" style={{ textDecoration: "none", display: "inline-flex", marginTop: 24 }}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
