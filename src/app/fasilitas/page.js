"use client";
import React, { useState } from "react";
import Image from "next/image";

// Sample hotel data
const hotelData = [
  {
    id: 1,
    name: "Bunaken Oasis Dive Resort & Spa",
    image: "/images/hotels/hotel-1.jpg", // You'll need to add these images to your public folder
    price: "IDR 2,500,000",
    description:
      "Luxury eco-resort with world-class diving facilities and spa services",
  },
  {
    id: 2,
    name: "Siladen Resort & Spa",
    image: "/images/hotels/hotel-2.jpg",
    price: "IDR 3,200,000",
    description:
      "Exclusive beachfront villas with panoramic views of Manado Tua",
  },
  {
    id: 3,
    name: "Raja Laut Dive Resort",
    image: "/images/hotels/hotel-3.jpg",
    price: "IDR 1,800,000",
    description:
      "Comfortable accommodations with direct access to diving spots",
  },
  {
    id: 4,
    name: "Froggies Divers",
    image: "/images/hotels/hotel-4.jpg",
    price: "IDR 1,500,000",
    description:
      "Cozy bungalows ideal for diving enthusiasts and nature lovers",
  },
  {
    id: 5,
    name: "Bunaken Cha Cha Nature Resort",
    image: "/images/hotels/hotel-5.jpg",
    price: "IDR 2,100,000",
    description:
      "Eco-friendly resort with tropical gardens and beachfront access",
  },
  {
    id: 6,
    name: "Bunaken Island Resort",
    image: "/images/hotels/hotel-6.jpg",
    price: "IDR 1,700,000",
    description:
      "Traditional-style cottages with modern amenities and sea views",
  },
];

// Sample transportation data
const transportationData = [
  {
    id: 1,
    name: "Public Ferry",
    image: "/images/transportation/transport-1.jpg",
    price: "IDR 50,000",
    description:
      "Regular public ferry service between Manado and Bunaken Island, economical option for travelers",
  },
  {
    id: 2,
    name: "Private Speedboat",
    image: "/images/transportation/transport-2.jpg",
    price: "IDR 850,000",
    description:
      "Fast and comfortable private speedboat transfers with flexible departure times",
  },
  {
    id: 3,
    name: "Resort Transfer Service",
    image: "/images/transportation/transport-3.jpg",
    price: "IDR 650,000",
    description:
      "Exclusive boat transfers for resort guests with complimentary refreshments",
  },
];

const FasilitasPage = () => {
  const [activeTab, setActiveTab] = useState("hotel");

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center px-5 h-[60vh] bg-white relative">
          <div className="w-full text-center" data-aos="fade-right">
            <h1 className="md:text-[64px] text-[40px] tracking-tighter font-libre font-medium text-bluecustom text-[#0313FF]">
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
                  Transportation
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
                  <div
                    key={hotel.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-60 w-full">
                      <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                        <p className="text-gray-500">Hotel Image</p>
                        {/* Uncomment when you have actual images */}
                        {/* <Image 
                          src={hotel.image}
                          alt={hotel.name}
                          fill
                          className="object-cover"
                        /> */}
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
                            / night
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
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
                        {/* <Image 
                          src={transport.image}
                          alt={transport.name}
                          fill
                          className="object-cover"
                        /> */}
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
                          <span className="text-gray-600 font-normal text-sm">
                            {" "}
                            / trip
                          </span>
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
