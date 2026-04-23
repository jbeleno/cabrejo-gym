"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const accentIcon = new L.DivIcon({
  className: "",
  html: `<div style="
    width: 20px; height: 20px;
    background: #FFF50D;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255,245,13,0.8);
    border: 3px solid #0A0A0A;
  "></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 15, { duration: 1.2 });
  }, [map, lat, lng]);
  return null;
}

interface MapProps {
  lat: number;
  lng: number;
  name: string;
}

export default function Map({ lat, lng, name }: MapProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full z-0"
      attributionControl={true}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <FlyTo lat={lat} lng={lng} />
      <Marker position={[lat, lng]} icon={accentIcon}>
        <Popup>
          <span className="font-bold text-black">{name}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
