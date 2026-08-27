import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat, Alex_Brush } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Memory Book",
  description: "A collection of moments, memories, and stories from our journey together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${caveat.variable} ${alexBrush.variable} font-sans min-h-full bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent`}
      >
        {children}
      </body>
    </html>
  );
}
