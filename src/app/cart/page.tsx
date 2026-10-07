import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="font-serif text-4xl text-[#2c1810] mb-12 text-center">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-grow">
            <div className="bg-white border border-[#e8e0d6] shadow-sm">
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-[#e8e0d6] text-[11px] font-bold tracking-widest uppercase text-[#5a5a5a]">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              {/* Item 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-[#e8e0d6] items-center">
                <div className="col-span-1 md:col-span-6 flex gap-6 items-center">
                  <div className="w-20 h-24 relative bg-[#f5f5f5]">
                    <Image src="/candle_aurora.jpg" alt="Aurora" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#2c1810]">Aurora No.1</h3>
                    <p className="text-xs text-[#5a5a5a] mt-1">Sandalwood & Amber</p>
                    <button className="text-[10px] uppercase tracking-widest text-red-500 mt-3 font-semibold">Remove</button>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 text-center text-[#5a5a5a] font-medium hidden md:block">
                  ₹849
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-center mt-4 md:mt-0">
                  <div className="flex border border-[#e8e0d6] w-24">
                    <button className="px-3 py-1 text-[#5a5a5a]">-</button>
                    <input type="text" value="1" readOnly className="w-full text-center bg-transparent text-sm focus:outline-none" />
                    <button className="px-3 py-1 text-[#5a5a5a]">+</button>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 text-right text-[#1a1a1a] font-medium mt-4 md:mt-0">
                  ₹849
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-white border border-[#e8e0d6] shadow-sm p-8">
              <h3 className="font-serif text-2xl text-[#2c1810] mb-6">Order Summary</h3>
              
              <div className="space-y-4 text-sm text-[#5a5a5a] border-b border-[#e8e0d6] pb-6 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹849</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between text-[#1a1a1a] font-serif text-2xl mb-8">
                <span>Total</span>
                <span>₹849</span>
              </div>

              <button className="w-full bg-[#1a1a1a] text-white py-4 text-[13px] font-bold tracking-widest uppercase hover:bg-[#b8922a] transition-colors mb-4">
                Checkout
              </button>
              
              <Link href="/collections" className="block text-center text-[12px] uppercase tracking-widest text-[#5a5a5a] hover:text-[#b8922a] transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
