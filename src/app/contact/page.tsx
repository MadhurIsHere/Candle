import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="font-serif text-5xl text-[#2c1810] mb-4 text-center">Contact Us</h1>
        <p className="text-center text-[#5a5a5a] mb-16 uppercase tracking-widest text-sm">We'd love to hear from you</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white p-8 border border-[#e8e0d6] shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-[11px] font-bold tracking-widest uppercase text-[#1a1a1a] mb-2">Name</label>
                <input type="text" className="w-full border-b border-[#e8e0d6] pb-2 bg-transparent focus:outline-none focus:border-[#b8922a] transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-widest uppercase text-[#1a1a1a] mb-2">Email</label>
                <input type="email" className="w-full border-b border-[#e8e0d6] pb-2 bg-transparent focus:outline-none focus:border-[#b8922a] transition-colors" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-widest uppercase text-[#1a1a1a] mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-[#e8e0d6] pb-2 bg-transparent focus:outline-none focus:border-[#b8922a] transition-colors resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="w-full bg-[#1a1a1a] text-white py-4 text-[13px] font-bold tracking-widest uppercase hover:bg-[#b8922a] transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Socials & Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-[#2c1810] mb-4">Direct Support</h3>
              <p className="text-[#5a5a5a] mb-6 leading-relaxed">
                Need immediate assistance? Reach out to us directly on WhatsApp or follow our journey on Instagram.
              </p>
              
              <div className="space-y-4">
                <a href="https://wa.me/917982629277" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#1a1a1a] hover:text-[#25D366] transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-[#e8e0d6] flex items-center justify-center group-hover:border-[#25D366] transition-colors bg-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="font-medium tracking-wide">WhatsApp Us</span>
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#1a1a1a] hover:text-[#E1306C] transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-[#e8e0d6] flex items-center justify-center group-hover:border-[#E1306C] transition-colors bg-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </div>
                  <span className="font-medium tracking-wide">Follow on Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-[#1a1a1a] mb-2">Email</h3>
              <a href="mailto:hello@lumiere.com" className="text-[#5a5a5a] hover:text-[#b8922a] transition-colors">hello@lumiere.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
