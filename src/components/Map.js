import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  const position = [59.9139, 10.7455]; // [latitude, longitude]
  const zoomLevel = 10;

  return (
    <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
