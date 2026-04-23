"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Acerca", href: "/#about" },
  { label: "Novelas", href: "/novel" },
  { label: "Cuento", href: "/tale" },
  { label: "Crónicas", href: "/chronicle" },
  { label: "Ensayos", href: "/essays" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleScrollToAuthor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#fdfcfb] border-b border-black/10 sticky top-0 z-50 transition-all duration-300">
      <nav className="flex justify-between items-center w-full px-8 py-5 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-serif italic tracking-tight text-on-surface hover:opacity-70 transition-opacity"
        >
          Ligia Urroz
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href === "/#about" ? (
              <a
                key={link.href}
                href={link.href}
                onClick={handleScrollToAuthor}
                className="font-serif italic text-lg tracking-tight text-on-surface/60 hover:text-on-surface transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif italic text-lg tracking-tight text-on-surface/60 hover:text-on-surface transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <a
          href="mailto:ligia.urroz@gmail.com"
          className="hidden md:block font-serif italic text-lg tracking-tight text-on-surface border border-black/20 px-6 py-2 hover:bg-primary hover:text-on-primary transition-all duration-300"
        >
          Contacto
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-black/10">
          <ul className="flex flex-col items-center space-y-5 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href === "/#about" ? (
                  <a
                    href={link.href}
                    onClick={handleScrollToAuthor}
                    className="font-serif italic text-lg text-on-surface/70 hover:text-on-surface cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif italic text-lg text-on-surface/70 hover:text-on-surface"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
