import MarqueeBanner from "./components/MarqueeBanner";
import Navbar from "./components/Navbar";
import ProductStrip from "./components/ProductStrip";
import HeroSection from "./components/HeroSection";
import YouMightLike from "./components/YouMightLike";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <MarqueeBanner />
      <Navbar />
      <main>
        <ProductStrip />
        <HeroSection />
        <YouMightLike />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
