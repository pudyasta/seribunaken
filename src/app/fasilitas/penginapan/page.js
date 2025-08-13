"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample hotel data
const hotelData = [
  {
    id: 0,
    name: "Arto Moro Bunaken",
    description:
      "Penginapan di tepi pantai Bunaken dengan bar dan lounge bersama, akses langsung ke teras dan Wi‑Fi gratis. Rating lokasi sangat tinggi (skor ~9.4–9.5). Staf membantu, makanan lezat, cocok untuk snorkeling, diving, dan aktivitas laut lainnya.",
    price: "Rp400.000–1.200.000",
    image: "/assets/fasilitas/artomoro.jpg",

    link: "https://www.booking.com/hotel/id/arto-moro-bunaken.html",
  },
  {
    id: 1,
    name: "Kuda Laut Boutique Dive Resort",
    description:
      "Outdoor pool, private beach area, dive centre di Pulau Siladen",
    price: "Mulai dari Rp4.352.000  ",
    image: "/assets/fasilitas/kuda.jpg",

    link: "https://www.booking.com/hotel/id/kuda-laut-boutique-dive-resort.html",
  },
  {
    id: 2,
    name: "The Village Bunaken",
    description:
      "Kolam renang luar ruangan, taman, restoran, lounge dan pantai pribadi",
    price: "Mulai dari Rp2.256.000  ",
    image: "/assets/fasilitas/village.jpg",

    link: "https://www.booking.com/hotel/id/the-village-bunaken.html",
  },
  {
    id: 3,
    name: "Bunaken 18 Diving Resort and Cafe",
    description:
      "5 kamar kecil dekat Pangalisang Beach, ac, terrace, café, diving/snorkeling",
    price: "Mulai dari Rp1.312.000  ",
    image: "/assets/fasilitas/18.jpg",

    link: "https://www.booking.com/hotel/id/bunaken-18-diving-resort-and-cafe.html",
  },
  {
    id: 4,
    name: "Two Fish Resort Bunaken",
    description: "Resort dengan outdoor pool & water‑sports di Bunaken Island",
    price: "Mulai dari Rp1.744.000  ",
    image: "/assets/fasilitas/twofish.jpg",

    link: "https://www.booking.com/hotel/id/two-fish-resort-bunaken.html",
  },
  {
    id: 5,
    name: "Bunaken Sea Garden Resort",
    description:
      "Bungalows gaya Indonesia di Pangalisang Beach dengan dive centre",
    price: "Rp1.280.000 – Rp1.440.000  ",
    image: "/assets/fasilitas/seagarden.jpg",

    link: "https://www.booking.com/hotel/id/bunaken-sea-garden-resort.html",
  },
  {
    id: 6,
    name: "Bunaken Oasis Dive Resort and Spa",
    description:
      "Spa & pool, lokasi dekat Manado Harbour, layanan bar dan diving",
    price: "+ Rp3.200.000  ",
    image: "/assets/fasilitas/oasis.jpg",

    link: "https://www.booking.com/hotel/id/bunaken-oasis-dive-resort-and-spa.html",
  },

  {
    id: 8,
    name: "Raja Laut Dive Resort Bunaken",
    description:
      "Bungalows kayu kelapa, suasana santai keluarga, dekat snorkeling/diving",
    price: "Mulai dari Rp1.440.000 – Rp1.760.000  ",
    image: "/assets/fasilitas/rajalaut.jpg",

    link: "https://www.booking.com/hotel/id/raja-laut-bunaken.html",
  },
  {
    id: 9,
    name: "Panorama Cottage (Backpackers)",
    description:
      "Lokasi sunset bagus, cozy beach bar, dasar akomodasi, vibes santai",
    price: "Rp608.000 – Rp960.000  ",
    image: "/assets/fasilitas/panorama.jpg",

    link: "https://www.booking.com/hotel/id/panorama-backpacker.html",
  },
  {
    id: 10,
    name: "3WILL Bunaken Dive Resort",
    description:
      "Diving centre, massage, game room, beachfront bungalows staf ramah",
    price: "Mulai dari Rp1.248.000  ",
    image: "/assets/fasilitas/3will.jpg",

    link: "https://www.booking.com/hotel/id/3will-bunaken-dive-resort.html",
  },
  {
    id: 11,
    name: "Happy Gecko Dive Resort",
    description:
      "Private beach, restoran, diving/snorkeling, akses langsung ke pantai",
    price: "Mulai dari Rp1.296.000  ",
    image: "/assets/fasilitas/gecko.jpg",
    link: "https://www.booking.com/hotel/id/cicak-senang-resort.html",
  },
  {
    id: 12,
    name: "Cakalang Resort",
    description:
      "Tepi Pangalisang Beach, dive/snorkel onsite, restoran, 24‑hour front desk",
    price: "Rp576.000 – Rp1.280.000  ",
    image: "/assets/fasilitas/cakalang.jpg",
    link: "https://www.booking.com/hotel/id/cakalang-resort.html",
  },
];

// Sample transportation data
const transportationData = [
  {
    id: 1,
    name: "Public Ferry",
    image: "/assets/fasilitas/taxi.png",
    price: "IDR 25,000/orang",
    description:
      "Layanan kapal feri umum reguler antara Manado dan Pulau Bunaken merupakan opsi ekonomis bagi para pelancong. Kapal berangkat ke Dermaga Bersehati Manado setiap Senin hingga Sabtu pada pukul 09.00 WITA dan kembali ke Bunaken dari Manado pada pukul 15.00 WITA.",
  },
  {
    id: 2,
    name: "Private Speedboat / Lepa-lepa",
    image: "/assets/fasilitas/lepa.png",
    price: "IDR 25,000/orang",
    description:
      "Layanan speedboat pribadi yang cepat dan nyaman dengan waktu keberangkatan yang fleksibel. Meskipun demikian, kapal jenis ini hanya mengantar hingga ke dermaga Rap-rap atau Bahowo.",
  },
  {
    id: 3,
    name: "Resort Transfer Service",
    image: "/assets/fasilitas/private.png",
    price: "Tentatif",
    description:
      "Layanan kapal eksklusif untuk tamu resort dengan fasilitas penunjang yang lengkap",
  },
  {
    id: 4,
    name: "Bajaj",
    image: "/assets/fasilitas/bajaj.png",
    price: "IDR 20,000 - IDR 30,000",
    description:
      "Bajaj Viar adalah moda transportasi roda tiga yang dimodifikasi untuk mengangkut penumpang dalam jumlah kecil. Kendaraan ini dapat menampung sekitar 3 hingga 6 orang dalam sekali perjalanan, tergantung pada konfigurasi tempat duduk dan kapasitas muat. ",
  },
];

const FasilitasPage = () => {
  const [activeTab, setActiveTab] = useState("hotel");

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center px-5 h-[60vh] bg-white relative">
          <div className="w-full text-center" data-aos="fade-right">
            <h1 className="md:text-[64px] text-[40px] tracking-tighter font-libre font-medium text-bluecustom text-[#0313FF] mt-12 text-center mb-10">
              Temukan Fasilitas yang <br /> Tersedia di Bunaken
            </h1>
          </div>

          {/* Tab Bar positioned absolutely at the bottom */}
          <div className="absolute bottom-0 left-0 w-full bg-white">
            <div className="container mx-auto  px-5">
              <div className="flex space-x-6">
                <button
                  onClick={() => setActiveTab("hotel")}
                  className={`px-4 py-3 text-[24px] md:text-[32px] tracking-tighter font-libre font-medium transition-all ${
                    activeTab === "hotel"
                      ? "text-[#0313FF] border-b-2 border-[#0313FF]"
                      : "text-gray-600 hover:text-[#0313FF]"
                  }`}
                >
                  Hotel
                </button>
                <button
                  onClick={() => setActiveTab("transportation")}
                  className={`px-4 py-3 text-[24px] md:text-[32px] tracking-tighter font-libre font-medium transition-all ${
                    activeTab === "transportation"
                      ? "text-[#0313FF] border-b-2 border-[#0313FF]"
                      : "text-gray-600 hover:text-[#0313FF]"
                  }`}
                >
                  Transportasi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full bg-white px-5 md:px-0 pb-20">
          {activeTab === "hotel" && (
            <div data-aos="fade-up">
              {/* Hotel Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {hotelData.map((hotel) => (
                  <Link
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={hotel.id}
                  >
                    <div
                      key={hotel.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-60 w-full">
                        <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                          <p className="text-gray-500">Hotel Image</p>
                          {/* Uncomment when you have actual images */}
                          <Image
                            src={hotel.image}
                            alt={hotel.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-libre tracking-tighter text-[#0313FF] font-medium ">
                          {hotel.name}
                        </h3>
                        <p className="text-gray-600 font-inter text-[14px] mt-2">
                          {hotel.description}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <p className="text-[#0313FF] font-semibold">
                            {hotel.price}
                            <span className="text-gray-600 font-normal text-sm">
                              {" "}
                              / malam
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "transportation" && (
            <div data-aos="fade-up">
              {/* Transportation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {transportationData.map((transport) => (
                  <div
                    key={transport.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-60 w-full">
                      <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                        <p className="text-gray-500">Transportation Image</p>
                        {/* Uncomment when you have actual images */}
                        <Image
                          src={transport.image}
                          alt={transport.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-libre tracking-tighter text-[#0313FF] font-medium ">
                        {transport.name}
                      </h3>
                      <p className="text-gray-600 font-inter text-[14px] mt-2">
                        {transport.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-[#0313FF] font-semibold">
                          {transport.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FasilitasPage;
