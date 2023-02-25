import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

function Map({ polygonFlag, extraPolygons }) {
  const initialPosition = [59.9139, 10.7455]; // [latitude, longitude]
  const initialZoom = 10;

  function generatePolygons(extraPolygons) {
    const newPolygons = [];
    for (let i = 0; i < extraPolygons; i++) {
      const randomCoordinates = [];
      // Generate random points for the next polygon
      for (let j = 0; j < 5; j++) {
        const latitude = 59.0 + Math.random();
        const longitude = 11.0 + Math.random();
        randomCoordinates.push([latitude, longitude]);
      }
      newPolygons.push(randomCoordinates);
    }
    return newPolygons;
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
      {<Polygon positions={generatePolygons(extraPolygons)} />}
    </MapContainer>
  );
}

export default Map;
