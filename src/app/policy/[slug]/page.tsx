export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  // Wait for the params to resolve
  const { slug } = await params;
  
  // Format slug for title (e.g., 'privacy-policy' -> 'Privacy Policy')
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-[#fdfaf6] pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="font-serif text-4xl text-[#2c1810] mb-8 text-center">{title}</h1>
        <div className="w-16 h-[1px] bg-[#b8922a] mx-auto mb-12"></div>
        
        <div className="bg-white p-8 md:p-12 border border-[#e8e0d6] shadow-sm">
          <div className="space-y-6 text-[#5a5a5a] text-sm leading-loose">
            <h3 className="font-bold text-[#1a1a1a] tracking-widest uppercase text-xs">1. Introduction</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h3 className="font-bold text-[#1a1a1a] tracking-widest uppercase text-xs pt-4">2. Data Collection</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3 className="font-bold text-[#1a1a1a] tracking-widest uppercase text-xs pt-4">3. Use of Information</h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
