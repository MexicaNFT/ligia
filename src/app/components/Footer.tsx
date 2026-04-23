import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fdfcfb] border-t border-black/10 mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-serif italic text-on-surface">
            Ligia Urroz
          </span>
          <p className="font-sans uppercase tracking-[0.2em] text-[10px] font-medium text-on-surface/50">
            Reading promoter and author.
          </p>
          <p className="font-sans uppercase tracking-[0.2em] text-[10px] font-medium text-on-surface/40 mt-1">
            &copy; {new Date().getFullYear()} Ligia Urroz. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.facebook.com/Ligiaurrozescritora"
            target="_blank"
            aria-label="Facebook"
            className="w-8 h-8 flex items-center justify-center border border-black/10 text-on-surface/50 hover:text-on-surface hover:border-black transition-colors"
          >
            <Facebook size={15} />
          </Link>
          <Link
            href="https://x.com/ligiaurroz"
            target="_blank"
            aria-label="Twitter / X"
            className="w-8 h-8 flex items-center justify-center border border-black/10 text-on-surface/50 hover:text-on-surface hover:border-black transition-colors"
          >
            <Twitter size={15} />
          </Link>
          <Link
            href="https://www.instagram.com/ligiaurroz"
            target="_blank"
            aria-label="Instagram"
            className="w-8 h-8 flex items-center justify-center border border-black/10 text-on-surface/50 hover:text-on-surface hover:border-black transition-colors"
          >
            <Instagram size={15} />
          </Link>
          <a
            href="mailto:ligia.urroz@gmail.com"
            className="font-sans uppercase tracking-[0.2em] text-[10px] font-medium text-on-surface/50 hover:text-on-surface underline underline-offset-4 transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
