"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdownFasilitas, setShowDropdownFasilitas] = useState(false);
  const [showDropdownKisah, setShowDropdownKisah] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed z-10">
      <div className="md:mx-auto flex items-center md:flex-col">
        {/* Logo & Hamburger */}
        <div className="flex justify-between w-full shadow-md px-5">
          <div className="flex md:justify-center justify-start w-full py-3">
            <img src="/assets/common/logo.png" alt="Logo" className="h-12" />
          </div>
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

          {/* Kisah Inspiratif Dropdown (desktop hover) */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center space-x-1 hover:text-blue-600">
              <span>Kisah Inspiratif</span>
              <ChevronDown size={16} />
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-200 z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cerita Mahasiswa
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Cerita Masyarakat
                </li>
              </ul>
            </div>
          </div>

          {/* Fasilitas Dropdown (desktop hover) */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center space-x-1 hover:text-blue-600">
              <span>Fasilitas</span>
              <ChevronDown size={16} />
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-200 z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/fasilitas">Penginapan dan Transportasi</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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

          {/* Kisah Inspiratif Dropdown (mobile click) */}
          <div className="relative">
            <button
              onClick={() => setShowDropdownKisah(!showDropdownKisah)}
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <span>Kisah Inspiratif</span>
              <ChevronDown size={16} />
            </button>
            {showDropdownKisah && (
              <div className="mt-2 bg-white rounded-md shadow-lg w-full">
                <ul className="py-2 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Cerita Mahasiswa
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Cerita Masyarakat
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Fasilitas Dropdown (mobile click) */}
          <div className="relative">
            <button
              onClick={() => setShowDropdownFasilitas(!showDropdownFasilitas)}
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <span>Fasilitas</span>
              <ChevronDown size={16} />
            </button>
            {showDropdownFasilitas && (
              <div className="mt-2 bg-white rounded-md shadow-lg w-full">
                <ul className="py-2 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link href="/fasilitas/penginapan">
                      Penginapan dan Transportasi
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
