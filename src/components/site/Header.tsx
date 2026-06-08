"use client";

import { useState } from "react";
import { navLinks } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-bar">
        <a href="tel:18002399948" className="phone">
          1-800-239-9948
        </a>
        <p>Group order flash sales, on-demand stores, and bulk orders</p>
        <div className="account-links" aria-label="Account links">
          <a href="/login">Log in</a>
          <a href="/cart">Cart (0)</a>
          <a href="/checkout">Checkout</a>
        </div>
      </div>

      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#" className="brand" aria-label="Spirit Hero home">
          <span className="brand-mark">S</span>
          <span>SpiritHero.com</span>
        </a>
        <div className="nav-right">
          <button
            className="nav-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
