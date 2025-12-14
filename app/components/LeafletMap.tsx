"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Properly remove private method without using `any`
type IconDefaultProto = {
  _getIconUrl?: () => string;
};

const iconDefault = L.Icon.Default.prototype as IconDefaultProto;

if (iconDefault._getIconUrl) {
  delete iconDefault._getIconUrl;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface LeafletMapProps {
  lat: number;
  lng: number;
}

export default function LeafletMap({ lat, lng }: LeafletMapProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>Sree Krithi Farms</Popup>
      </Marker>
    </MapContainer>
  );
}
