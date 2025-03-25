"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleScrollToAuthor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document
          .getElementById("about-author")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("about-author")
        ?.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#131415] text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          Ligia Urroz
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about-author"
                className="hover:text-gray-300 cursor-pointer"
                onClick={handleScrollToAuthor}
              >
                Acerca del Autor
              </a>
            </li>
            <li>
              <Link href="/novel" className="hover:text-gray-300">
                Novelas
              </Link>
            </li>
            <li>
              <Link href="/tale" className="hover:text-gray-300">
                Cuento
              </Link>
            </li>
            <li>
              <Link href="/chronicle" className="hover:text-gray-300">
                Crónicas
              </Link>
            </li>
            <li>
              <Link href="/essays" className="hover:text-gray-300">
                Ensayos
              </Link>
            </li>
            {/* <li>
              <Link href="#" className="hover:text-gray-300">
                Publicaciones Varias
              </Link>
            </li> */}
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#about-author"
                className="hover:text-gray-300 cursor-pointer"
                onClick={handleScrollToAuthor}
              >
                Acerca del Autor
              </a>
            </li>
            <li>
              <Link href="/novel" className="hover:text-gray-300">
                Novelas
              </Link>
            </li>
            <li>
              <Link href="/tale" className="hover:text-gray-300">
                Cuento
              </Link>
            </li>
            <li>
              <Link href="/chronicle" className="hover:text-gray-300">
                Crónicas
              </Link>
            </li>
            <li>
              <Link href="/essays" className="hover:text-gray-300">
                Ensayos
              </Link>
            </li>
            {/* <li>
              <Link href="#" className="hover:text-gray-300">
                Publicaciones Varias
              </Link>
            </li> */}
          </ul>
        </nav>
      )}
    </header>
  );
}
