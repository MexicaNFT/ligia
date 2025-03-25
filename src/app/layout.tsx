import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Ligia Urroz",
  description: "Welcome to Ligia Urroz's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
