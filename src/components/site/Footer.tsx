import { footerLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {footerLinks.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </div>
      <p>Copyright 2026 SpiritHero.com.</p>
    </footer>
  );
}
