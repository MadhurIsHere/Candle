"use client";
import Image from "next/image";

const products = [
  { name: "Aurora", scent: "Sandalwood & Amber", img: "/candle_aurora.jpg" },
  { name: "Flora", scent: "Jasmine & Peony", img: "/candle_flora.jpg" },
  { name: "Silva", scent: "Cedar & Bergamot", img: "/candle_silva.jpg" },
  { name: "Nox", scent: "Smoke & Leather", img: "/candle_nox.jpg" },
  { name: "Luna", scent: "Oud & Musk", img: "/candle_hero.jpg" },
  { name: "Collection", scent: "Full Set", img: "/candle_collection.jpg" },
];

export default function ProductStrip() {
  return (
    <section className="product-strip" aria-label="Featured scents">
      <div className="product-strip-track">
        {products.map((p) => (
          <div key={p.name} className="product-strip-item" role="button" tabIndex={0}>
            <div className="product-strip-img-wrap">
              <img src={p.img} alt={p.name} />
            </div>
            <span className="product-strip-name">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
