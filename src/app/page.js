"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const numbers = [
    { name: "Area", num: "89,095 km" },
    { name: "Marine Habitat", num: "97%" },
    { name: "Coral Species", num: "390" },
    { name: "Population", num: "30,000" },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="w-full flex items-center lg:px-32 md:px-16 px-5 h-screen bg-[url('/assets/home/banner.png')] bg-cover bg-no-repeat">
        <div data-aos="fade-right">
          <h3 className="md:text-2xl text-xl text-white">
            a showcase by KKN-PPM UGM
          </h3>
          <h1 className="xl:text-9xl md:text-8xl text-5xl tracking-tighter font-libre font-medium text-shadow-lg text-white">
            Seri Bunaken, ‘25
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white w-full py-32 px-5">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/assets/home/about-title.svg"
            alt="About Title"
            className="w-2/3 md:w-1/5"
            width={1080}
            height={1080}
          />
          <Image
            src="/assets/home/about.png"
            alt="About"
            className="w-full md:w-3/4"
            width={1080}
            height={1080}
          />
          <p className="text-[#0313FF] text-base md:text-xl max-w-7xl text-center">
            Bunaken adalah surga bahari yang terletak di utara Pulau Sulawesi,
            Indonesia. Dikenal sebagai salah satu lokasi menyelam terbaik di
            dunia, Bunaken menawarkan keindahan bawah laut yang luar biasa,
            dengan lebih dari 390 spesies terumbu karang dan beragam jenis ikan
            tropis. Air lautnya yang jernih, dinding karang yang curam, serta
            kehidupan laut yang kaya menjadikan Bunaken destinasi impian para
            penyelam dan pecinta alam. Selain keindahan bawah lautnya, Bunaken
            juga menawarkan pesona budaya lokal dari masyarakat pesisir yang
            ramah dan masih menjaga tradisi. Pulau ini mudah diakses dari Kota
            Manado, dengan perjalanan laut sekitar 45 menit menggunakan kapal.
            Bunaken bukan hanya tempat wisata, tetapi juga kawasan konservasi
            penting yang menunjukkan harmoni antara manusia dan alam. Kunjungan
            Anda turut mendukung pelestarian ekosistem laut yang berharga ini.
          </p>
        </div>

        {/* Numbers Section */}
        <div className="flex flex-col items-center tracking-tighter">
          <h2 className="text-[#0313FF] text-3xl md:text-5xl font-medium font-libre mt-24 text-center">
            Bunaken in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 w-full md:max-w-7xl px-4 justify-items-center">
            {numbers.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 md:flex-row flex-col items-cen"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 relative  ">
                  <Image
                    src="/assets/home/dummy-numbers.svg"
                    fill
                    className="object-contain"
                    alt="icon"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-[#0313FF] font-libre text-lg md:text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-black text-xl md:text-3xl font-libre">
                    {item.num}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transition Section */}
      <div className="bg-[url('/assets/home/overlay-transition.png')] w-full h-52 bg-cover bg-no-repeat flex items-center justify-center">
        <h1 className="text-3xl md:text-7xl  font-libre text-white text-center px-4">
          KKN-PPM UGM Seri Bunaken
        </h1>
      </div>

      {/* Description Section */}
      <div className="bg-white w-full py-16 flex flex-col items-center px-4 md:px-0">
        <Image
          src="/assets/home/kknppm.png"
          alt="KKN PPM"
          className="w-full md:w-3/5 mb-8"
          width={1080}
          height={1080}
        />
        <p className="text-[#0313FF] text-base md:text-xl max-w-6xl text-center">
          KKN-PPM UGM adalah salah satu bentuk nyata komitmen kerakyatan dan
          kebangsaan Universitas Gadjah Mada. KKN-PPM UGM ini merupakan mata
          kuliah wajib yang mempunyai sejarah panjang; rintisannya telah dimulai
          sejak tahun 1951. Sepanjang sejarah pelaksanaannya KKN-PPM UGM telah
          menunjukkan manfaat luar biasa besar dalam memberdayakan masyarakat
          dalam kerangka pembangunan Negara Kesatuan Republik Indonesia.
        </p>
      </div>
    </>
  );
}
