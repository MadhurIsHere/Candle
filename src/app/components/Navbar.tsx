"use client";
import { useState } from "react";
import Link from "next/link";

const collections = [
  "Aurora – Sandalwood & Amber",
  "Flora – Jasmine & Peony",
  "Silva – Cedar & Bergamot",
  "Nox – Smoke & Leather",
  "Luna – Oud & Musk",
  "Sol – Citrus & White Tea",
  "Rêve – Lavender & Vanilla",
  "Ciel – Fresh Linen & Rain",
  "Terra – Vetiver & Patchouli",
];

const policyLinks = ["Privacy Policy", "Return & Refund Policy"];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState<string | null>(null);

  return (
    <nav className="navbar">
      {/* Top row */}
      <div className="navbar-top">
        {/* Social icons */}
        <div className="navbar-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://wa.me" target="_blank" rel="noreferrer" className="social-link" aria-label="WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
        </div>

        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <div className="logo-name">Lumi<span>ère</span></div>
            <div className="logo-tagline">Candle Co.</div>
          </Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <Link href="/search" className="nav-icon-btn" aria-label="Search" id="navbar-search-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </Link>
          <Link href="/wishlist" className="nav-icon-btn" aria-label="Wishlist" id="navbar-wishlist-btn">
            <span className="badge">2</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </Link>
          <Link href="/cart" className="nav-icon-btn" aria-label="Cart" id="navbar-cart-btn">
            <span className="badge">0</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom nav links */}
      <div className="navbar-bottom">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => setActiveNav("collections")}
            onMouseLeave={() => setActiveNav(null)}
          >
            <span className="nav-link" style={{ cursor: "pointer" }}>
              Collections
              <svg className="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <div className="dropdown dropdown-collections">
              <div className="dropdown-left">
                <div className="dropdown-section-title">Fragrances</div>
                {collections.map((c) => (
                  <Link key={c} href={`/collections/${c.split("–")[0].trim().toLowerCase()}`} className="dropdown-link">
                    {c}
                  </Link>
                ))}
              </div>
              <div className="dropdown-right">
                <div className="dropdown-preview">
                  <img src="/candle_aurora.jpg" alt="Aurora Collection" />
                  <div className="dropdown-preview-label">Aurora</div>
                </div>
                <div className="dropdown-preview">
                  <img src="/candle_hero.jpg" alt="Luna Collection" />
                  <div className="dropdown-preview-label">Luna</div>
                </div>
                <div className="dropdown-preview">
                  <img src="/candle_product3.jpg" alt="Silva" />
                  <div className="dropdown-preview-label">Silva</div>
                </div>
                <div className="dropdown-preview">
                  <img src="/candle_collection.jpg" alt="Gift Sets" />
                  <div className="dropdown-preview-label">Gift Sets</div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link href="/about" className="nav-link">About Us</Link>
          </li>

          <li className="nav-item">
            <Link href="/contact" className="nav-link">Contact Us</Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => setActiveNav("policy")}
            onMouseLeave={() => setActiveNav(null)}
          >
            <span className="nav-link" style={{ cursor: "pointer" }}>
              Policy
              <svg className="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <div className="dropdown" style={{ left: "auto", right: 0, transform: activeNav === "policy" ? "translateY(0)" : "translateY(-8px)" }}>
              <div className="dropdown-section-title">Policies</div>
              {policyLinks.map((p) => (
                <Link key={p} href={`/policy/${p.toLowerCase().replace(/\s+/g, "-")}`} className="dropdown-link">
                  {p}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
