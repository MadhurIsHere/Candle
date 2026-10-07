import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Aurora No.1', desc: 'Sandalwood & Amber', price: '₹849', img: '/candle_aurora.jpg' },
  { id: 2, name: 'Flora No.3', desc: 'Jasmine & Peony', price: '₹799', img: '/candle_product2.jpg' },
  { id: 3, name: 'Silva No.7', desc: 'Cedar & Bergamot', price: '₹849', img: '/candle_product3.jpg' },
  { id: 4, name: 'Nox No.2', desc: 'Smoke & Leather', price: '₹899', img: '/candle_product4.jpg' },
  { id: 5, name: 'Luna No.5', desc: 'Amber & Oud', price: '₹949', img: '/candle_hero.jpg' },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h1 className="font-serif text-5xl text-[#2c1810] mb-4 text-center">All Collections</h1>
        <p className="text-center text-[#5a5a5a] mb-16 uppercase tracking-widest text-xs">Hand-poured artisan candles</p>
        
        {/* Filters/Sort Bar */}
        <div className="flex justify-between items-center border-y border-[#e8e0d6] py-4 mb-12 text-xs font-bold tracking-widest uppercase text-[#1a1a1a]">
          <button className="flex items-center gap-2 hover:text-[#b8922a] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            Filter
          </button>
          <div className="flex items-center gap-2">
            Sort By: 
            <select className="bg-transparent border-none outline-none cursor-pointer font-medium hover:text-[#b8922a] transition-colors">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
          {products.map(p => (
            <Link href={`/collections/${p.name.split(' ')[0].toLowerCase()}`} key={p.id} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] mb-6">
                <Image 
                  src={p.img} 
                  alt={p.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#2c1810] mb-1">{p.name}</h3>
                <p className="text-[11px] uppercase tracking-widest text-[#5a5a5a] mb-3">{p.desc}</p>
                <div className="text-[#1a1a1a] font-medium">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
