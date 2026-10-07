"use client";

const slides = [
  {
    badge: "New Drop",
    title: "Amber",
    titleItalic: "& Oud",
    subtitle: "Luna No.5",
    desc: "Rich, resinous, and hauntingly beautiful. Our best-seller handcrafted from fine fragrance oils and 100% natural soy wax.",
    img: "/candle_hero.jpg",
    dropLabel: "New",
    dropTitle: "drop",
    dropSub: "Warm amber & smoky oud. Candles only for those who dare.",
    dropTag: "Artisan Craft",
  },
  {
    badge: "Limited Edition",
    title: "Aurora",
    titleItalic: "Collection",
    subtitle: "No.1 — Sandalwood & Amber",
    desc: "Clean-burning hand-poured soy wax with a complex woody-floral heart. Perfectly balanced for long burn times.",
    img: "/candle_aurora.jpg",
    dropLabel: "Limited",
    dropTitle: "drop",
    dropSub: "Elevated sandalwood. Only 50 units available.",
    dropTag: "Collector's Edition",
  },
];

export default function HeroSection() {
  return (
    <div className="w-full h-[380px] lg:h-[420px] overflow-hidden">
      <section className="hero h-full" aria-label="Featured product hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">{slides[0].badge}</span>
          </div>
          <h1 className="hero-title">
            {slides[0].title} <em>{slides[0].titleItalic}</em>
          </h1>
          <div className="hero-subtitle-name">{slides[0].subtitle}</div>
          <p className="hero-desc">{slides[0].desc}</p>
          <div className="hero-actions">
            <a href="/collections" className="btn-primary" id="hero-shop-now-btn">
              Shop Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <button className="btn-secondary" id="hero-view-collection-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              View Collection
            </button>
          </div>
          <div className="hero-dots">
            <span className="hero-dot active" />
            <span className="hero-dot" />
            <span className="hero-dot" />
            <span className="hero-dot" />
          </div>
        </div>

        <div className="hero-right h-full">
          <img src={slides[0].img} alt="Luna No.5 Amber & Oud candle" className="h-full object-cover" />
          <div className="hero-new-drop">
            <div className="hero-new-drop-label">
              <em>New</em><br />drop
            </div>
            <div className="hero-new-drop-sub">{slides[0].dropSub}</div>
            <div className="hero-new-drop-tag">{slides[0].dropTag}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
