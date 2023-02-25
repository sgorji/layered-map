// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Map from "./components/Map";

function App() {
  const [showPolygon, setShowPolygon] = useState(false);
  const [numPolygons, setNumPolygons] = useState(0);

  function handleChecke() {
    setShowPolygon(!showPolygon);
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
            onChange={handleChecke}
          />
        </label>
        <div>
          <input type="number" value={numPolygons} />
          <button>Add Polygon</button>
        </div>
        <Map polygonFlag={showPolygon}></Map>
      </div>
    </div>
  );
}

export default App;
