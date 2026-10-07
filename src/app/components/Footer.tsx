"use client";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Track Order", href: "/track" },
];

const collections = [
  { label: "Aurora – Sandalwood & Amber", href: "/collections/aurora" },
  { label: "Flora – Jasmine & Peony", href: "/collections/flora" },
  { label: "Silva – Cedar & Bergamot", href: "/collections/silva" },
  { label: "Nox – Smoke & Leather", href: "/collections/nox" },
  { label: "Luna – Oud & Musk", href: "/collections/luna" },
  { label: "Gift Sets", href: "/collections/gift-sets" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/policy/privacy-policy" },
  { label: "Return & Refund Policy", href: "/policy/return-refund-policy" },
  { label: "Shipping Policy", href: "/policy/shipping" },
  { label: "Terms of Service", href: "/policy/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fdfaf6] border-t border-[#e8e0d6] pt-16 mt-16 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
        
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-12 lg:gap-8 pb-12 border-b border-[#e8e0d6]">
          
          {/* Column 1: Brand Info */}
          <div className="w-full lg:w-[28%]">
            <div className="font-serif text-5xl text-[#2c1810] leading-none mb-2 tracking-tight">
              Lumi<span className="text-[#b8922a] italic">ère</span>
            </div>
            <div className="text-[11px] tracking-[0.35em] font-medium uppercase text-[#5a5a5a] mb-12">
              Candle Co.
            </div>
            
            <div className="mb-8 space-y-4">
              <p className="text-[13px] text-[#5a5a5a] flex items-center gap-3">
                <span className="font-semibold tracking-wider uppercase text-[#1a1a1a] text-[10px]">Email</span> 
                <a href="mailto:hello@lumiere.com" className="hover:text-[#b8922a] transition-colors">hello@lumiere.com</a>
              </p>
              <p className="text-[13px] text-[#5a5a5a] flex items-center gap-3">
                <span className="font-semibold tracking-wider uppercase text-[#1a1a1a] text-[10px]">Phone</span> 
                <a href="tel:+18005550199" className="hover:text-[#b8922a] transition-colors">+1 (800) 555-0199</a>
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full border border-[#e8e0d6] bg-white flex items-center justify-center text-[#1a1a1a] hover:border-[#b8922a] hover:text-[#b8922a] transition-all shadow-sm hover:shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-[#e8e0d6] bg-white flex items-center justify-center text-[#1a1a1a] hover:border-[#b8922a] hover:text-[#b8922a] transition-all shadow-sm hover:shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="w-[45%] lg:w-[20%]">
            <h3 className="text-[14px] font-semibold tracking-[0.15em] uppercase text-[#1a1a1a] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {policyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] text-[#5a5a5a] hover:text-[#b8922a] transition-colors block">
                    {l.label}
                  </Link>
                </li>
              ))}
              {links.slice(2).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] text-[#5a5a5a] hover:text-[#b8922a] transition-colors block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collection */}
          <div className="w-[45%] lg:w-[24%]">
            <h3 className="text-[14px] font-semibold tracking-[0.15em] uppercase text-[#1a1a1a] mb-6">
              Our Collection
            </h3>
            <ul className="space-y-4">
              {collections.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-[14px] text-[#5a5a5a] hover:text-[#b8922a] transition-colors block">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Image Highlights */}
          <div className="hidden lg:block lg:w-[25%] relative">
            <Link href="/collections/aurora" className="block group relative bg-white p-4 shadow-sm border border-[#e8e0d6] hover:shadow-xl transition-all duration-500 rounded-sm">
              <div className="text-center mb-4 mt-2">
                <span className="font-serif italic text-3xl text-[#2c1810]">Signature</span>
                <p className="text-[10px] tracking-widest uppercase text-[#b8922a] mt-1 font-semibold">The Aurora Edit</p>
              </div>
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#fdfaf6]">
                <Image 
                  src="/aurora_4.jpg" 
                  alt="Signature Candle Collection" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-[#9a9a9a]">
            Design & Developed By : <span className="font-medium text-[#5a5a5a]">Madhur Rastogi</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
