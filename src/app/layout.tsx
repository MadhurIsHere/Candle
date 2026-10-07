import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Candle Co. | Luxury Hand-Poured Candles",
  description:
    "Discover Lumière's collection of luxury hand-poured soy wax candles. Premium fragrances crafted to transform your space.",
  keywords: ["luxury candles", "soy wax candles", "scented candles", "hand poured candles"],
  openGraph: {
    title: "Lumière Candle Co.",
    description: "Luxury hand-poured candles for every moment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
