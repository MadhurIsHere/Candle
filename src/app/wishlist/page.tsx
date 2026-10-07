import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Aurora No.1', desc: 'Sandalwood & Amber', price: '₹849', img: '/candle_aurora.jpg' },
  { id: 2, name: 'Flora No.3', desc: 'Jasmine & Peony', price: '₹799', img: '/candle_product2.jpg' },
];

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="font-serif text-4xl text-[#2c1810] mb-4 text-center">Your Wishlist</h1>
        <p className="text-center text-[#5a5a5a] mb-16 uppercase tracking-widest text-xs">Saved for later</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {products.map(p => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] mb-6">
                <Image 
                  src={p.img} 
                  alt={p.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm hover:scale-110 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#2c1810] mb-1">{p.name}</h3>
                <p className="text-[11px] uppercase tracking-widest text-[#5a5a5a] mb-3">{p.desc}</p>
                <div className="text-[#1a1a1a] font-medium mb-4">{p.price}</div>
                <button className="text-[10px] uppercase tracking-widest font-bold border-b border-[#1a1a1a] pb-1 hover:text-[#b8922a] hover:border-[#b8922a] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
