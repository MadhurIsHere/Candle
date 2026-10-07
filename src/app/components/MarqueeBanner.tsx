"use client";

const messages = [
  "Hand-Poured with Love",
  "Free Shipping on Orders ₹999+",
  "New Season, New Scents: Autumn Collection",
  "Limited Edition Launches Every Month",
  "100% Natural Soy Wax",
  "Premium Fragrance Oils",
];

export default function MarqueeBanner() {
  const doubled = [...messages, ...messages];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubled.map((msg, i) => (
          <span key={i} className="marquee-item">
            {msg}
            <span className="marquee-divider" />
          </span>
        ))}
      </div>
    </div>
  );
}
