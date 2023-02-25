// import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";

function App() {
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
          <input type="checkbox" />
        </label>
        <Map></Map>
      </div>
    </div>
  );
}

export default App;
