// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Map from "./components/Map";

function App() {
  const [showPolygon, setShowPolygon] = useState(false);
  const [readInput, setReadInput] = useState(0);
  // const [numPolygons, setNumPolygons] = useState(0);
  const [extraPolygons, setExtraPolygons] = useState([]);
  // const [showInput, setShowInput] = useState(false);
  // const [points, setPoints] = useState([]);
  const mapCenter = [59.9139, 10.7455];

  function handleCheck() {
    setShowPolygon(!showPolygon);
  }

  function getInput(e) {
    setReadInput(parseInt(e.target.value));
  }

  function generatePolygons(polygonCount) {
    // Calculating the size of a square grid to fit extra polygons
    const squreSide = Math.ceil(Math.sqrt(polygonCount));
    const step = 0.0005;
    const shrink = 0.7;

    const newPolygons = [];
    for (let i = 0; i < polygonCount; i++) {
      const nextCoordinates = [];

      // Generate the next polygon
      // for (let j = 0; j < 5; j++) {
      //   const latitude =
      //     59.0 + (Math.floor(i / squreSide) + Math.random()) / squreSide;
      //   const longitude = 11.0 + ((i % squreSide) + Math.random()) / squreSide;
      //   nextCoordinates.push([latitude, longitude]);
      // }

      for (const j of [0, 1, 3, 2]) {
        const latitude =
          mapCenter[0] +
          step * (Math.floor(i / squreSide) + Math.floor(j / 2) * shrink);
        const longitude =
          mapCenter[1] + step * ((i % squreSide) + (j % 2) * shrink);
        nextCoordinates.push([latitude, longitude]);
      }

      newPolygons.push(nextCoordinates);
    }
    return newPolygons;
  }

  function handleAdd() {
    setExtraPolygons(generatePolygons(readInput));
  }

  function handleRemove() {
    setExtraPolygons([]);
  }

  // function handleToggleInput() {
  //   setShowInput(!showInput);
  //   setPoints([]);
  // }

  // function handleMapClick(e) {
  //   if (points.length < 2) {
  //     setPoints([...points, e.latlng]);
  //   }
  //   console.log(points);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Interactive Map</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className="input-container">
        {/* <label>
          Specified Polygon
          <input
            type="checkbox"
            className="largeCheckbox"
            name="polygon"
            checked={showPolygon}
            onChange={handleCheck}
          />
        </label> */}
        <div>
          <input
            type="number"
            className="numberField"
            value={readInput}
            onChange={getInput}
          />
          <button onClick={handleAdd}>Add Polygons</button>
          <button onClick={handleRemove}>Remove Polygons</button>
        </div>
        {/* <div>
          Two Points Input
          <label>
            <input
              type="checkbox"
              name="points"
              checked={showInput}
              onChange={handleToggleInput}
            />
          </label>
          {showInput && (
            <p>
              Click on the map to choose two points.
              {points.length === 1 && <span> First point selected.</span>}
              {points.length === 2 && <span> Two points selected.</span>}
            </p>
          )}
        </div> */}
      </div>
      <div className="map-container">
        <Map
          polygonFlag={showPolygon}
          extraPolygons={extraPolygons}
          initialPosition={mapCenter}
          // onClick={handleMapClick}
          // points={points}
        />
      </div>
    </div>
  );
}

export default App;
