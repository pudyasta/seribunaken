"use client";
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

const images = [
  "/assets/galeri/bunaken (1).png",
  "/assets/galeri/bunaken (2).png",
  "/assets/galeri/bunaken (3).png",
  "/assets/galeri/bunaken (4).png",
  "/assets/galeri/bunaken (5).png",
  "/assets/galeri/bunaken (6).png",
  "/assets/galeri/bunaken (7).png",
  "/assets/galeri/bunaken (8).png",
  "/assets/galeri/bunaken (9).png",
  "/assets/galeri/bunaken (10).png",
  "/assets/galeri/bunaken (11).png",
  "/assets/galeri/bunaken (12).png",
  "/assets/galeri/bunaken (13).png",
  "/assets/galeri/bunaken (14).png",
  "/assets/galeri/bunaken (15).png",
  "/assets/galeri/bunaken (16).png",
  "/assets/galeri/bunaken (17).png",
  "/assets/galeri/bunaken (18).png",
  "/assets/galeri/bunaken (19).png",
  "/assets/galeri/bunaken (20).png",
  "/assets/galeri/bunaken (21).png",
  "/assets/galeri/bunaken (22).png",
  "/assets/galeri/bunaken (23).png",
  "/assets/galeri/bunaken (24).png",
  "/assets/galeri/bunaken (25).png",
  "/assets/galeri/bunaken (26).png",
  "/assets/galeri/bunaken (27).png",
  "/assets/galeri/bunaken (28).png",
  "/assets/galeri/bunaken (29).png",
  "/assets/galeri/bunaken (30).png",
  "/assets/galeri/bunaken (31).png",
  "/assets/galeri/bunaken (32).png",
  "/assets/galeri/bunaken (33).png",
  "/assets/galeri/bunaken (34).png",
  "/assets/galeri/bunaken (35).png",
  "/assets/galeri/bunaken (36).png",
  "/assets/galeri/bunaken (37).png",
  "/assets/galeri/bunaken (38).png",
  "/assets/galeri/bunaken (39).png",
  "/assets/galeri/bunaken (40).png",
  "/assets/galeri/bunaken (41).png",
  "/assets/galeri/bunaken (42).png",
  "/assets/galeri/bunaken (43).png",
  "/assets/galeri/bunaken (44).png",
  "/assets/galeri/bunaken (45).png",
  "/assets/galeri/bunaken (46).png",
  "/assets/galeri/bunaken (47).png",

  // Add more as needed
];

const breakpointColumnsObj = {
  default: 6,
  1100: 5,
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
        className="flex gap-5"
        columnClassName="space-y-5"
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
