"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md  fixed z-10">
      <div className="md:mx-auto flex items-center md:flex-col">
        {/* Logo */}
        <div className="flex justify-between w-full shadow-md px-5">
          <div className="flex md:justify-center justify-start w-full py-3">
            <img src="/assets/common/logo.png" alt="Logo" className="h-12" />
          </div>
          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="border-2 p-1 rounded-sm cursor-pointer transition-all duration-300"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-16 text-sm font-semibold text-gray-800 py-3">
          <Link href="/" className="hover:text-blue-600">
            Beranda
          </Link>
          <Link href="/galeri" className="hover:text-blue-600">
            Galeri
          </Link>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <span>Kisah Inspiratif</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <span>Fasilitas</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Mobile Menu with transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen py-4 px-4" : "max-h-0 px-2"
        }`}
      >
        <div className="flex flex-col space-y-2 text-sm font-semibold text-gray-800">
          <Link href="/" className="hover:text-blue-600">
            Beranda
          </Link>
          <Link href="/galeri" className="hover:text-blue-600">
            Galeri
          </Link>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <span>Kisah Inspiratif</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <span>Fasilitas</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
}
