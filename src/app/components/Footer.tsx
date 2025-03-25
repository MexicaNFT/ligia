import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ligia Urroz</h2>
            <p className="text-white text-sm mb-6">
              Reading promoter and author.
            </p>
            <div className="flex gap-4 mb-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook
                  size={40}
                  className="text-black bg-white rounded-full p-2"
                />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter
                  size={40}
                  className="text-black bg-white rounded-full p-2"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram
                  size={40}
                  className="text-black bg-white rounded-full p-2"
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin
                  size={40}
                  className="text-black bg-white rounded-full p-2"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-10">
              © {new Date().getFullYear()} Ligia Urroz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
