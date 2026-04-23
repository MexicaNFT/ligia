import "./globals.css";
import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type React from "react";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="es">
      <body className={`${newsreader.variable} ${workSans.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
