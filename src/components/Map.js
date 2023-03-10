import React from "react";
// import { useState } from "react";
import { MapContainer, TileLayer, Polygon, LayersControl } from "react-leaflet";

function Map({ polygonFlag, extraPolygons, initialPosition }) {
  // const initialPosition = [59.9139, 10.7455]; // [latitude, longitude]
  const initialZoom = 10;

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
      <LayersControl position="topright">
        <LayersControl.Overlay
          name="Specified Polygon"
          background-color="darkmagenta"
        >
          <Polygon positions={coordinates} color={"darkmagenta"} />
          {/* {polygonFlag && (
            <Polygon positions={coordinates} color={"darkmagenta"} />
          )} */}
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Extra Polygons" LayersControl="blue">
          <Polygon positions={extraPolygons} color={"blue"} />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}

export default Map;
