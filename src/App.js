// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Map from "./components/Map";

function App() {
  const [showPolygon, setShowPolygon] = useState(false);
  const [readInput, setReadInput] = useState(0);
  // const [numPolygons, setNumPolygons] = useState(0);
  const [extraPolygons, setExtraPolygons] = useState([]);

  function handleCheck() {
    setShowPolygon(!showPolygon);
  }

  function getInput(e) {
    setReadInput(parseInt(e.target.value));
  }

  function generatePolygons(polygonCount) {
    // Calculating the size of a square grid to fit extra polygons
    const squreSide = Math.ceil(Math.sqrt(polygonCount));

    const newPolygons = [];
    for (let i = 0; i < polygonCount; i++) {
      const randomCoordinates = [];

      // Generate random points for the next polygon with grid shifts
      for (let j = 0; j < 5; j++) {
        const latitude =
          59.0 + (Math.floor(i / squreSide) + Math.random()) / squreSide;
        const longitude = 11.0 + ((i % squreSide) + Math.random()) / squreSide;
        randomCoordinates.push([latitude, longitude]);
      }
      newPolygons.push(randomCoordinates);
    }
    return newPolygons;
  }

  function handleAdd() {
    // setNumPolygons(readInput);
    setExtraPolygons(generatePolygons(readInput));
  }

  function handleRemove() {
    // setNumPolygons(readInput);
    setExtraPolygons([]);
  }

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
      <div>
        Polygon
        <label>
          <input
            type="checkbox"
            name="polygon"
            checked={showPolygon}
            onChange={handleCheck}
          />
        </label>
        <div>
          <input type="number" value={readInput} onChange={getInput} />
          <button onClick={handleAdd}>Add Polygons</button>
          <button onClick={handleRemove}>Remove Polygons</button>
        </div>
        <Map polygonFlag={showPolygon} extraPolygons={extraPolygons}></Map>
      </div>
    </div>
  );
}

export default App;
