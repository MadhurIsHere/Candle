"use client";

const products = [
  {
    id: 1,
    name: "Aurora No.1",
    scent: "Sandalwood & Amber",
    price: "₹849",
    img: "/candle_aurora.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Flora No.4",
    scent: "Jasmine & Peony",
    price: "₹799",
    img: "/candle_flora.jpg",
    tag: "New",
  },
  {
    id: 3,
    name: "Silva No.7",
    scent: "Cedar & Bergamot",
    price: "₹849",
    img: "/candle_silva.jpg",
    tag: null,
  },
  {
    id: 4,
    name: "Nox No.2",
    scent: "Smoke & Leather",
    price: "₹899",
    img: "/candle_nox.jpg",
    tag: "Limited",
  },
];

export default function YouMightLike() {
  return (
    <section className="you-might-like" aria-labelledby="yml-heading">
      <div className="you-might-like-inner">
        <div className="section-heading">
          <div className="section-overline">Curated for You</div>
          <h2 className="section-title" id="yml-heading">
            You Might <em>Like</em>
          </h2>
        </div>

        <div className="products-grid" style={{ position: "relative" }}>
          <button className="products-nav-btn prev" aria-label="Previous products" id="products-prev-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {products.map((p) => (
            <article key={p.id} className="product-card" id={`product-card-${p.id}`}>
              <div className="product-card-img-wrap">
                <img src={p.img} alt={`${p.name} ${p.scent} candle`} loading="lazy" />
                {p.tag && <span className="product-card-tag">{p.tag}</span>}
                <button className="product-card-wishlist" aria-label={`Add ${p.name} to wishlist`} id={`wishlist-${p.id}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-name">{p.name}</h3>
                <p className="product-card-scent">{p.scent}</p>
                <div className="product-card-footer">
                  <span className="product-card-price">{p.price}</span>
                  <button className="product-card-add" aria-label={`Add ${p.name} to cart`} id={`add-to-cart-${p.id}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}

          <button className="products-nav-btn next" aria-label="Next products" id="products-next-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
