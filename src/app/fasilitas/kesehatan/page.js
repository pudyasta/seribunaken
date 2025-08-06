import React from "react";
import { FaMapLocationDot, FaSuitcaseMedical } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
const penyakitData = [
  {
    title: "Lingkungan 1-3 (Bunaken)",
    data: [
      ["Hipertensi", 71],
      ["Asam Urat", 45],
      ["Kolesterol", 48],
      ["Diabetes", 6],
    ],
  },
  {
    title: "Manado Tua 1",
    data: [
      ["Hipertensi", 31],
      ["Asam Urat", 14],
      ["Kolesterol", 6],
      ["Diabetes", 4],
    ],
  },
  {
    title: "Manado Tua 2",
    data: [
      ["Hipertensi", 41],
      ["Asam Urat", 17],
      ["Kolesterol", 10],
      ["Diabetes", 8],
    ],
  },
  {
    title: "Lingkungan 4-5 (Bunaken)",
    data: [
      ["Hipertensi", 29],
      ["Asam Urat", 35],
      ["Kolesterol", 16],
      ["Diabetes", 5],
    ],
  },
  {
    title: "Lingkungan 6 (Tanjung Parigi)",
    data: [
      ["Hipertensi", 52],
      ["Asam Urat", 27],
      ["Kolesterol", 14],
      ["Diabetes", 5],
    ],
  },
  {
    title: "Lingkungan 7 (Siladen)",
    data: [
      ["Hipertensi", 8],
      ["Asam Urat", 10],
      ["Kolesterol", 0],
      ["Diabetes", 4],
    ],
  },
  {
    title: "Lingkungan 1-2 (Alung Banua)",
    data: [
      ["Hipertensi", 52],
      ["Asam Urat", 27],
      ["Kolesterol", 11],
      ["Diabetes", 9],
    ],
  },
];

const colorMap = {
  Hipertensi: "bg-red-500",
  "Asam Urat": "bg-yellow-500",
  Kolesterol: "bg-blue-500",
  Diabetes: "bg-green-500",
};

export default function BunakenDashboard() {
  return (
    <div className="    pb-20 pt-32 px-4 md:px-20 bg-white">
      <h1 className="md:text-[64px] text-[40px] tracking-tighter font-libre font-medium text-bluecustom text-[#0313FF] mt-12 text-center mb-10">
        Fasilitas dan Persebaran Kesehatan di Bunaken
      </h1>

      {/* Fasilitas Kesehatan */}
      <div className="bg-white shadow-md rounded-lg p-6 border space mb-5">
        <h2 className="text-2xl mb-4 text-blue-700 font-libre flex items-center gap-4">
          <FaMapLocationDot />
          Jumlah Fasilitas Kesehatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="p-4 bg-blue-50 rounded-md shadow-sm">
            <p className="text-gray-700">Bunaken</p>
            <p className="text-red-600 font-bold">Puskesmas Utama</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-md shadow-sm">
            <p className="text-gray-700">Tanjung Parigi</p>
            <p className="text-red-600 font-bold">Puskesmas Penunjang</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-md shadow-sm">
            <p className="text-gray-700">Siladen</p>
            <p className="text-gray-500">Tidak ada fasilitas</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-md shadow-sm">
            <p className="text-gray-700">Alung Banua</p>
            <p className="text-gray-500">Tidak ada fasilitas</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-md shadow-sm">
            <p className="text-gray-700">Manado Tua</p>
            <p className="text-gray-500">Tidak ada fasilitas</p>
          </div>
        </div>
      </div>

      {/* Alat Kesehatan */}
      <div className="bg-white shadow-md rounded-lg p-6 border mb-5">
        <h2 className="text-2xl mb-4 text-blue-700 font-libre flex items-center gap-4">
          <FaSuitcaseMedical />
          Alat Kesehatan di Puskesmas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Poli Umum</h3>
            <ul className="space-y-1 text-gray-600 list-disc list-inside">
              <li>Bed</li>
              <li>Timbangan</li>
              <li>Ukuran Tinggi</li>
              <li>Cek Tensi</li>
              <li>Alat Cek Gula Darah</li>
              <li>Oksigen</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Poli Gigi</h3>
            <ul className="space-y-1 text-gray-600 list-disc list-inside">
              <li>Alat Cabut Gigi</li>
              <li>Tambal Gigi</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Penyakit */}
      <div className="bg-white shadow-md rounded-lg p-6 border mb-5">
        <h2 className="text-2xl mb-4 text-blue-700 font-libre flex items-center gap-4">
          <ImStatsBars />
          Persebaran Penyakit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {penyakitData.map((section, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-700 mb-2">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.data.map(([name, count], idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`w-3 h-3 rounded-full ${
                          colorMap[name] || "bg-gray-400"
                        }`}
                      ></span>
                      <span className="text-sm text-gray-600">{name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-32 bg-gray-200 rounded-full">
                        <div
                          className={`${
                            colorMap[name] || "bg-gray-400"
                          } h-2 rounded-full`}
                          style={{ width: `${Math.min(count, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-700 font-medium">
                        {count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
