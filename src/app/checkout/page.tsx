import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout | Spirit Hero",
  description: "Complete your Spirit Hero order with secure checkout.",
};

export default function CheckoutPage() {
  return (
    <div className="auth-page">
      <div className="auth-glow auth-glow-1"></div>
      <div className="auth-glow auth-glow-2"></div>

      <div className="auth-container">
        <Link href="/" className="auth-brand" aria-label="Spirit Hero home">
          <span className="auth-brand-mark">SH</span>
          <span className="auth-brand-name">SpiritHero.com</span>
        </Link>

        <div className="auth-card" style={{ maxWidth: 720 }}>
          <div className="auth-card-header">
            <h1>Checkout</h1>
            <p>Complete your order details below.</p>
          </div>

          <form className="auth-form" action="#">
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Shipping Information</h3>
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
              <span>Email</span>
              <input type="email" placeholder="you@example.com" required />
            </label>

            <label className="auth-label">
              <span>Address</span>
              <input type="text" placeholder="123 Main St" required />
            </label>

            <div className="auth-row">
              <label className="auth-label">
                <span>City</span>
                <input type="text" placeholder="Springfield" required />
              </label>
              <label className="auth-label">
                <span>State</span>
                <input type="text" placeholder="IL" required />
              </label>
              <label className="auth-label">
                <span>ZIP</span>
                <input type="text" placeholder="62704" required />
              </label>
            </div>

            <div className="checkout-divider"></div>

            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Payment</h3>
            <label className="auth-label">
              <span>Card number</span>
              <input type="text" placeholder="4242 4242 4242 4242" required />
            </label>

            <div className="auth-row">
              <label className="auth-label">
                <span>Expiry</span>
                <input type="text" placeholder="MM / YY" required />
              </label>
              <label className="auth-label">
                <span>CVC</span>
                <input type="text" placeholder="123" required />
              </label>
            </div>

            <div className="checkout-summary">
              <div className="checkout-line">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="checkout-line">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="checkout-line checkout-total">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>

            <button type="submit" className="auth-submit">
              Place Order
            </button>
          </form>

          <p className="auth-footer">
            <Link href="/cart" className="auth-link">
              ← Back to cart
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
