import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Perbaiki icon default (karena Leaflet default tidak tampil di React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const wilayahData = [
  {
    name: "Lingkungan 1-3 (Bunaken)",
    lat: 1.6245,
    lng: 124.7606,
    penyakit: {
      Hipertensi: 71,
      AsamUrat: 45,
      Kolesterol: 48,
      Diabetes: 6,
    },
  },
  {
    name: "Manado Tua 1",
    lat: 1.6117,
    lng: 124.6993,
    penyakit: {
      Hipertensi: 31,
      AsamUrat: 14,
      Kolesterol: 6,
      Diabetes: 4,
    },
  },
  {
    name: "Manado Tua 2",
    lat: 1.6144,
    lng: 124.7075,
    penyakit: {
      Hipertensi: 41,
      AsamUrat: 17,
      Kolesterol: 10,
      Diabetes: 8,
    },
  },
  {
    name: "Lingkungan 4-5 (Bunaken)",
    lat: 1.6261,
    lng: 124.7632,
    penyakit: {
      Hipertensi: 29,
      AsamUrat: 35,
      Kolesterol: 16,
      Diabetes: 5,
    },
  },
  {
    name: "Lingkungan 6 (Tanjung Parigi)",
    lat: 1.6252,
    lng: 124.7705,
    penyakit: {
      Hipertensi: 52,
      AsamUrat: 27,
      Kolesterol: 14,
      Diabetes: 5,
    },
  },
  {
    name: "Lingkungan 7 (Siladen)",
    lat: 1.6221,
    lng: 124.7921,
    penyakit: {
      Hipertensi: 8,
      AsamUrat: 10,
      Kolesterol: 0,
      Diabetes: 4,
    },
  },
  {
    name: "Alung Banua",
    lat: 1.6293,
    lng: 124.7555,
    penyakit: {
      Hipertensi: 52,
      AsamUrat: 27,
      Kolesterol: 11,
      Diabetes: 9,
    },
  },
];

export default function PenyakitMap() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        🗺️ Peta Persebaran Penyakit
      </h2>
      <MapContainer
        center={[1.6245, 124.7606]}
        zoom={12}
        scrollWheelZoom={false}
        className="h-[500px] w-full rounded-lg shadow"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {wilayahData.map((wilayah, idx) => (
          <Marker key={idx} position={[wilayah.lat, wilayah.lng]}>
            <Popup>
              <div className="text-sm">
                <strong>{wilayah.name}</strong>
                <ul className="mt-2">
                  {Object.entries(wilayah.penyakit).map(
                    ([penyakit, jumlah], i) => (
                      <li key={i}>
                        {penyakit}:{" "}
                        <span className="font-semibold">{jumlah}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
