"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Cream");
  const [selectedSize, setSelectedSize] = useState("10oz");

  const product = {
    title: "AURORA No.1 Sandalwood & Amber",
    price: 35.00,
    oldPrice: 42.00,
    description: "A deep, comforting blend of warm amber, creamy sandalwood, and subtle vanilla notes. Hand-poured into a minimalist matte ceramic vessel that complements any luxury interior.",
    features: [
      "100% natural soy wax blend",
      "Cotton lead-free wick",
      "Hand-poured in small batches",
      "Burn time: ~60 hours (10oz)",
    ],
    images: [
      "/aurora_1.jpg",
      "/aurora_2.jpg",
      "/aurora_3.jpg",
      "/aurora_4.jpg"
    ]
  };

  const colors = [
    { name: "Cream", hex: "#f7f3ee" },
    { name: "Charcoal", hex: "#2c2c2c" },
    { name: "Sage", hex: "#7a8c7e" }
  ];

  return (
    <main className="min-h-screen bg-[#fdfaf6]">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 flex items-center gap-2 text-xs text-[#9a9a9a] tracking-wider mt-20">
        <Link href="/" className="hover:text-[#b8922a] transition-colors">Home</Link>
        <span className="opacity-50">/</span>
        <Link href="/collections" className="hover:text-[#b8922a] transition-colors">Collections</Link>
        <span className="opacity-50">/</span>
        <span className="text-[#5a5a5a] font-medium">{product.title}</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20 pt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Left: Gallery */}
        <div className="lg:sticky lg:top-24 w-full">
          {/* Main Image */}
          <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden bg-[#f7f3ee] group cursor-zoom-in">
            <Image 
              src={product.images[activeImage]} 
              alt={product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative shrink-0 w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${
                  activeImage === idx ? 'border-[#b8922a]' : 'border-[#e8e0d6] hover:border-[#b8922a]'
                }`}
              >
                <Image src={img} alt={`Thumbnail ${idx+1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="pt-2">
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#b8922a] font-semibold mb-2">
            Signature Collection
          </div>
          
          <h1 className="text-3xl md:text-[40px] font-medium text-[#2c1810] leading-[1.15] mb-2 font-serif">
            {product.title}
          </h1>
          
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-2xl font-bold text-[#2c1810] font-serif">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-lg text-[#9a9a9a] line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          </div>

          <p className="text-sm text-[#5a5a5a] leading-[1.8] mb-6">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#1a1a1a] mb-3">
              Vessel Color: <span className="text-[#b8922a] font-normal normal-case tracking-normal ml-1">{selectedColor}</span>
            </div>
            <div className="flex gap-3">
              {colors.map(c => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-9 h-9 rounded-full border-2 transition-transform hover:scale-110 ${
                    selectedColor === c.name ? 'border-[#1a1a1a] ring-2 ring-white ring-inset' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={`Select ${c.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#1a1a1a] mb-3">
              Size
            </div>
            <div className="flex gap-2">
              {["10oz", "14oz"].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 border rounded-full text-xs font-medium transition-colors ${
                    selectedSize === size 
                      ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white' 
                      : 'border-[#e8e0d6] text-[#5a5a5a] hover:border-[#b8922a] hover:text-[#b8922a]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & CTA */}
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#1a1a1a] mb-3">
              Quantity
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {/* Qty Control */}
              <div className="flex items-center border border-[#e8e0d6] rounded-full overflow-hidden w-fit h-12">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-full flex items-center justify-center text-[#5a5a5a] hover:bg-[#f7f3ee]"
                >
                  -
                </button>
                <div className="w-12 h-full flex items-center justify-center border-x border-[#e8e0d6] text-sm font-semibold text-[#1a1a1a]">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-full flex items-center justify-center text-[#5a5a5a] hover:bg-[#f7f3ee]"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-[#b8922a] text-white h-12 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#2c1810] transition-colors shadow-lg hover:shadow-xl">
                Buy Now
              </button>
            </div>
          </div>

          {/* Custom Builder Banner */}
          <Link href="/custom" className="block mt-8 p-6 bg-gradient-to-br from-[#2c1810] to-[#4a2c1a] rounded-xl group hover:-translate-y-1 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">
                ✨
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-white mb-1">Make it Yours</h3>
                <p className="text-xs text-white/70">Build a custom scented candle with your own blend and vessel.</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-[#d4a843] font-serif">+$15</div>
                <div className="text-[9px] tracking-widest text-white/50 uppercase">Upgrade</div>
              </div>
            </div>
          </Link>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
