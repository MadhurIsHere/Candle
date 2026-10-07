"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const mockResults = [
  { id: 1, name: 'Aurora No.1', desc: 'Sandalwood & Amber', price: '₹849', img: '/candle_aurora.jpg' },
  { id: 2, name: 'Luna No.5', desc: 'Amber & Oud', price: '₹949', img: '/candle_hero.jpg' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  
  return (
    <div className="min-h-screen bg-[#fdfaf6] pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Search Input Area */}
        <div className="relative mb-20">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for candles, fragrances..." 
            className="w-full text-3xl md:text-5xl font-serif text-[#2c1810] bg-transparent border-b-2 border-[#e8e0d6] pb-4 focus:outline-none focus:border-[#b8922a] transition-colors placeholder-[#c4c4c4]"
            autoFocus
          />
          <button className="absolute right-0 top-2 text-[#1a1a1a] hover:text-[#b8922a] transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Results Area */}
        {query ? (
          <div>
            <p className="text-[11px] uppercase tracking-widest font-bold text-[#5a5a5a] mb-8">
              {mockResults.length} Results found for "{query}"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {mockResults.map(p => (
                <Link href={`/collections/${p.name.split(' ')[0].toLowerCase()}`} key={p.id} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] mb-4">
                    <Image 
                      src={p.img} 
                      alt={p.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#2c1810] mb-1">{p.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-[#5a5a5a] mb-2">{p.desc}</p>
                    <div className="text-[#1a1a1a] font-medium text-sm">{p.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-widest font-bold text-[#5a5a5a] mb-8">Popular Searches</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Sandalwood', 'Gift Sets', 'Oud', 'Floral Notes', 'Limited Edition'].map(term => (
                <button key={term} onClick={() => setQuery(term)} className="px-6 py-2 border border-[#e8e0d6] rounded-full text-sm text-[#1a1a1a] hover:border-[#b8922a] hover:text-[#b8922a] transition-all bg-white shadow-sm">
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
