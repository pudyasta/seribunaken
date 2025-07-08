"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const numbers = [
    {
      name: "Area",
      num: "89,095 km",
    },
    {
      name: "Marine Habitat",
      num: "97%",
    },
    {
      name: "Coral Species",
      num: "390",
    },
    {
      name: "Population",
      num: "30,000",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration
      once: true, // only animate once
    });
  }, []);
  return (
    <>
      <div className="w-full flex items-center md:px-32 px-5 h-screen bg-[url(../../public/assets/home/banner.png))] bg-cover bg-no-repeat">
        <div className="" data-aos="fade-right">
          <h3 className="md:text-2xl">a show case by KKN-PPM UGM</h3>
          <h1 className="md:text-9xl text-5xl tracking-tighter font-libre text-shadow-lg">
            Seri Bunaken, ‘25
          </h1>
        </div>
      </div>

      <div className="bg-white w-full min-h-screen relative py-16 ">
        <div className="flex flex-col items-center" data-aos="fade-down">
          <Image
            src={"/assets/home/about-title.svg"}
            alt="Footer Overlay"
            className="w-[20%] "
            width={1080}
            height={1080}
          />
          <Image
            src={"/assets/home/about.png"}
            alt="Footer Overlay"
            className="w-[60%] "
            width={1080}
            height={1080}
          />
          <p className="text-[#0313FF] text-xl w-[70%] text-center">
            “This collection is a tribute to the spirit of service — the ones
            who bring creativity, unity, and passion to our KKN PPM UGM journey.
            It’s a celebration of togetherness, collaboration, and making a
            difference in the community.”
          </p>
        </div>

        <div className="flex flex-col items-center" data-aos="fade-down">
          <h2 className="text-[#0313FF] text-5xl font-medium font-libre mt-16">
            Bunaken in Numbers
          </h2>
          <div className="w-[70%] flex gap-4 my-5  mt-14 ">
            {numbers.map((item, index) => (
              <div key={item.name} className="grid grid-cols-3 gap-3 m-auto">
                <Image
                  src={"/assets/home/dummy-numbers.svg"}
                  width={5000}
                  height={5000}
                  className="w-full h-full relative"
                  alt="dummy"
                />
                <div className="flex flex-col justify-center col-span-2">
                  <h2 className="text-[#0313FF] font-libre text-2xl">
                    {item.name}
                  </h2>
                  <h2 className="text-black text-3xl font-libre">{item.num}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-[url(../../public/assets/home/overlay-transition.png)] w-full h-52 bg-cover bg-no-repeat flex"
        data-aos="fade"
      >
        <h1 className="m-auto text-7xl font-libre">KKN-PPM UGM Seri Bunaken</h1>
      </div>

      <div className="bg-white w-full relative py-16 flex flex-col items-center">
        <Image
          src={"/assets/home/kknppm.png"}
          alt="Footer Overlay"
          className="w-[60%] "
          width={1080}
          height={1080}
          data-aos="fade"
        />
        <p className="text-[#0313FF] text-xl w-[70%] text-center">
          KKN-PPM UGM  adalah  salah  satu bentuk  nyata  komitmen  kerakyatan 
          dan kebangsaan Universitas Gadjah Mada. KKN-PPM UGM ini  merupakan 
          mata  kuliah  wajib  yang mempunyai  sejarah  panjang;  rintisannya 
          telah dimulai  sejak  tahun  1951.  Sepanjang  sejarah pelaksanaannya 
          KKN-PPM UGM  telah  menunjukkan manfaat luar biasa besar dalam
          memberdayakan masyarakat  dalam  kerangka  pembangunan Negara Kesatuan
          Republik Indonesia.
        </p>
      </div>
    </>
  );
}
