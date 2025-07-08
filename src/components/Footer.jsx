// import { Instagram, Tiktok, Facebook, Youtube } from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pb-8 bg-cover">
      <div className="relative w-full h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96">
        <Image
          src="/assets/sosmed/overlay-footer.png"
          alt="Footer Overlay"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col items-center space-y-4 mt-10">
        {/* Logo */}
        <img
          src="/assets/common/logo-white.png"
          alt="Seri Bunaken Logo"
          className="h-10"
        />

        {/* Social Media */}
        <div className="flex items-center gap-x-2 text-sm">
          <a
            href="https://www.instagram.com/seri.bunaken/"
            target="blank"
            className="flex items-center  hover:text-gray-400"
          >
            <Image
              src={"/assets/sosmed/instagram.svg"}
              alt="instagram"
              width={30}
              height={30}
            />
          </a>

          <a
            href="https://www.tiktok.com/@seri.bunaken"
            target="blank"
            className="flex items-center  hover:text-gray-400"
          >
            <Image
              src={"/assets/sosmed/tiktok.svg"}
              alt="Tiktok"
              width={30}
              height={30}
            />
          </a>
          <span className="mr-5">@seri.bunaken</span>
          <a href="https://x.com/seri_bunaken" className="hover:text-gray-400">
            <Image
              src={"/assets/sosmed/x.svg"}
              alt="x"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570648332565"
            className="hover:text-gray-400"
          >
            <Image
              src={"/assets/sosmed/facebook.svg"}
              alt="facebook"
              width={30}
              height={30}
            />
          </a>
          <a href="#" className="hover:text-gray-400 flex gap-4">
            <Image
              src={"/assets/sosmed/youtube.svg"}
              alt="Tiktok"
              width={30}
              height={30}
            />
          </a>
          <span>Seri Bunaken</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-2">
          SERI BUNAKEN 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
