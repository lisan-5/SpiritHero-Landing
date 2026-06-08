"use client";

import Image from "next/image";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    // Parallax tilt effect on the image card
    const card = document.querySelector(".hero-showcase") as HTMLElement;
    if (!card) return;

    function handleMove(e: MouseEvent) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    }

    function handleLeave() {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    }

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="hero-section" id="free-store">
      {/* Noise texture overlay */}
      <div className="hero-noise" />

      {/* Floating orb accents */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Main hero content */}
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            <span>Now serving 5,000+ organizations</span>
          </div>

          <h1 className="hero-headline">
            <span className="hero-line hero-line-1">Custom merch</span>
            <span className="hero-line hero-line-2">
              without the <em>chaos</em>
            </span>
          </h1>

          <p className="hero-sub">
            We design, print, and ship — you share one link.
            <br />
            Schools, teams, PTAs, and nonprofits trust Spirit Hero
            to run their stores so they don&apos;t have to.
          </p>

          <div className="hero-ctas">
            <a className="hero-btn-primary" href="#contact">
              <span>Launch Your Store</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a className="hero-btn-ghost" href="#stores">
              See how it works
            </a>
          </div>

          {/* Social proof row */}
          <div className="hero-proof">
            <div className="hero-avatars">
              <span className="hero-avatar" style={{ background: "#6c5ce7" }}>R</span>
              <span className="hero-avatar" style={{ background: "#00d2ff" }}>B</span>
              <span className="hero-avatar" style={{ background: "#ff6b6b" }}>M</span>
              <span className="hero-avatar" style={{ background: "#ffd93d", color: "#1a1a2e" }}>L</span>
            </div>
            <div className="hero-proof-text">
              <strong>5.0 ★★★★★</strong>
              <span>from 1,300+ reviews</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-showcase">
            <Image
              src="/images/hero.png"
              alt="Premium custom apparel showcase"
              width={1200}
              height={800}
              priority
              className="hero-img"
            />
            {/* Floating stat badges */}
            <div className="hero-float hero-float-top">
              <div className="hero-float-icon">⚡</div>
              <div>
                <span className="hero-float-label">Turnaround</span>
                <strong className="hero-float-value">7–10 days</strong>
              </div>
            </div>
            <div className="hero-float hero-float-bottom">
              <div className="hero-float-icon">📦</div>
              <div>
                <span className="hero-float-label">Items Shipped</span>
                <strong className="hero-float-value">1M+</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling marquee ticker */}
      <div className="hero-marquee">
        <div className="hero-marquee-track">
          {[...Array(2)].map((_, i) => (
            <div className="hero-marquee-content" key={i}>
              <span>School Spirit Wear</span>
              <span className="marquee-dot" />
              <span>PTA Fundraisers</span>
              <span className="marquee-dot" />
              <span>Team Gear</span>
              <span className="marquee-dot" />
              <span>Graduation Merch</span>
              <span className="marquee-dot" />
              <span>Staff Apparel</span>
              <span className="marquee-dot" />
              <span>Nonprofit Campaigns</span>
              <span className="marquee-dot" />
              <span>Yard Signs</span>
              <span className="marquee-dot" />
              <span>Flash Sales</span>
              <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
