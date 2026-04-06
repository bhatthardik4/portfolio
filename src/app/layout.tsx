import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hardik Bhatt | AI & Automation Engineer",
  description: "Portfolio of Hardik Bhatt, focused on AI and Automation systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-blue-600/20 selection:text-blue-900 bg-[var(--background)] text-[var(--foreground)]`}>
        <div className="max-w-[1200px] mx-auto min-h-screen border-x border-[var(--grid-border)] relative bg-[#FAFAFA] shadow-sm shadow-neutral-200/50">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
