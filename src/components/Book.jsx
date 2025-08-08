"use client";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

const pages = [
  "/book-pages/A5 - 1.png",
  "/book-pages/A5 - 2.png",
  "/book-pages/A5 - 3.png",
  "/book-pages/A5 - 4.png",
  "/book-pages/A5 - 5.png",
  "/book-pages/A5 - 6.png",
  "/book-pages/A5 - 7.png",
  "/book-pages/A5 - 8.png",
  "/book-pages/A5 - 9.png",
  "/book-pages/A5 - 10.png",
  "/book-pages/A5 - 11.png",
  "/book-pages/A5 - 12.png",
  "/book-pages/A5 - 13.png",
  "/book-pages/A5 - 14.png",
];

export default function Book() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <HTMLFlipBook
        width={420}
        height={594}
        flippingTime={1200}
        usePortrait={true}
        showCover={true}
        className="shadow-xl"
        style={{
          margin: "auto", // centers inside parent
          display: "flex", // prevent top anchoring
          alignItems: "center", // vertical center
          justifyContent: "center", // horizontal center
        }}
      >
        {pages.map((src, index) => (
          <div key={index} className="bg-white will-change-transform">
            <Image
              src={src}
              alt={`Page ${index + 1}`}
              width={420}
              height={594}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
