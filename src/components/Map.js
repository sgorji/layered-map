import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

function Map({ polygonFlag, extraPolygons }) {
  const initialPosition = [59.9139, 10.7455]; // [latitude, longitude]
  const initialZoom = 10;
  const [polygons, setPolygons] = useState([]);

  function generatePolygons() {
    // const map = mapRef.current;
    // const bounds = map.getBounds();
    const bounds = this.getBounds();
    // const numPolygonsInt = parseInt(numPolygons);
    const newPolygons = [];

    for (let i = 0; i < extraPolygons; i++) {
      const randomCoordinates = [];

      // Generate 5 random points within the map bounds
      for (let j = 0; j < 5; j++) {
        const latitude =
          bounds.getSouth() +
          Math.random() * (bounds.getNorth() - bounds.getSouth());
        const longitude =
          bounds.getWest() +
          Math.random() * (bounds.getEast() - bounds.getWest());
        randomCoordinates.push([latitude, longitude]);
      }

      newPolygons.push(randomCoordinates);
    }

    setPolygons(newPolygons);
  }

  // Coordinatas for the specified polygon
  const coordinates = [
    // [11.021941683607787, 59.944518214479572],
    // [11.02233843840375, 59.94441885931758],
    // [11.130057365507325, 59.94610785657823],
    // [11.130850875099249, 59.911913750299867],
    // [11.017379003454229, 59.911714844292121],
    // [11.021941683607787, 59.944518214479572],
    [59.944518214479572, 11.021941683607787],
    [59.94441885931758, 11.02233843840375],
    [59.94610785657823, 11.130057365507325],
    [59.911913750299867, 11.130850875099249],
    [59.911714844292121, 11.017379003454229],
    [59.944518214479572, 11.021941683607787],
  ];

  return (
    <MapContainer
      center={initialPosition}
      zoom={initialZoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {polygonFlag && <Polygon positions={coordinates} />}
    </MapContainer>
  );
}

export default Map;
