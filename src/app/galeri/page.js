"use client";
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

const images = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/9.jpg",
  "/assets/gallery/10.jpg",
  // Add more as needed
];

const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  900: 3,
  700: 2,
  500: 1,
};

export default function page() {
  return (
    <div className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 mt-20 font-libre ">
        Stories Captured
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="space-y-4"
      >
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={500}
              height={300}
              className="w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
