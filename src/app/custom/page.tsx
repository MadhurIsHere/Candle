"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function CustomCandlePage() {
  const [selectedColor, setSelectedColor] = useState("Blush");
  const [selectedFragrance, setSelectedFragrance] = useState("Rose & Oud");
  const [personalMessage, setPersonalMessage] = useState("");

  const colors = [
    { name: "Blush", hex: "#c9a4a4" },
    { name: "Sage", hex: "#7a8c7e" },
    { name: "Charcoal", hex: "#2c2c2c" },
    { name: "Cream", hex: "#f7f3ee" },
  ];

  const fragrances = [
    "Rose & Oud",
    "Fig & Vetiver",
    "Amber & Oak",
    "Lavender & Chamomile",
    "Sandalwood & Vanilla"
  ];

  return (
    <main className="min-h-screen bg-[#fdfaf6]">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24 mt-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2c1810] to-[#4a2c1a] text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
            Bespoke Edition <span className="text-[#d4a843]">+ $15</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-4">Build Your Custom Candle</h1>
          <p className="text-[#5a5a5a] text-sm md:text-base leading-relaxed">
            Create a truly unique gifting experience. Choose your preferred vessel color, hand-select your signature fragrance blend, and add a personalized handwritten note.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Preview */}
          <div className="lg:sticky lg:top-24 w-full aspect-[4/5] relative rounded-xl overflow-hidden bg-[#f7f3ee] shadow-2xl">
            <Image 
              src="/custom_candle.jpg" 
              alt="Custom Candle Preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e8e0d6]">
            
            {/* Color Option */}
            <div className="mb-10">
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a] mb-4 flex items-center gap-2">
                1. Select Vessel Color
                <span className="font-normal normal-case tracking-normal text-[#b8922a]">({selectedColor})</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                {colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-transform hover:scale-110 ${
                      selectedColor === c.name ? 'border-[#1a1a1a] ring-4 ring-white ring-inset' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={`Select ${c.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Fragrance Option */}
            <div className="mb-10">
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a] mb-4">
                2. Choose Signature Scent
              </h3>
              <div className="flex flex-wrap gap-3">
                {fragrances.map(f => (
                  <button
                    key={f}
                    onClick={() => setSelectedFragrance(f)}
                    className={`px-5 py-2.5 border rounded-full text-sm font-medium transition-colors ${
                      selectedFragrance === f 
                        ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white' 
                        : 'border-[#e8e0d6] text-[#5a5a5a] hover:border-[#b8922a] hover:text-[#b8922a]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Personalized Note */}
            <div className="mb-10">
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#1a1a1a] mb-4">
                3. Handwritten Gift Note (Optional)
              </h3>
              <textarea 
                value={personalMessage}
                onChange={(e) => setPersonalMessage(e.target.value)}
                placeholder="Write a message to be handwritten on our premium stationery..."
                className="w-full min-h-[120px] p-4 border border-[#e8e0d6] rounded-lg text-sm bg-[#fdfaf6] focus:outline-none focus:border-[#b8922a] resize-y"
                maxLength={200}
              />
              <div className="text-right text-xs text-[#9a9a9a] mt-2">
                {personalMessage.length} / 200 characters
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[#f7f3ee] border border-[#e8e0d6] rounded-xl p-6 mb-8">
              <div className="flex justify-between items-center py-2 text-sm text-[#5a5a5a] border-b border-[#e8e0d6]">
                <span>Base Candle (10oz)</span>
                <span className="font-semibold text-[#1a1a1a]">$35.00</span>
              </div>
              <div className="flex justify-between items-center py-2 text-sm text-[#5a5a5a] border-b border-[#e8e0d6]">
                <span>Bespoke Customization</span>
                <span className="font-semibold text-[#1a1a1a]">$15.00</span>
              </div>
              <div className="flex justify-between items-center pt-4 mt-2">
                <span className="text-lg font-bold text-[#2c1810]">Total</span>
                <span className="text-2xl font-serif font-bold text-[#b8922a]">$50.00</span>
              </div>
            </div>

            <button className="w-full bg-[#2c1810] text-white py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#1a1a1a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Add to Cart
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
