import React from "react";
import './App.css';
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Details city="Nairobi"/>
      <footer>This project is hosted on 
        <a href="https://github.com/Ruks-7/weather-forecast-react" target="_blank" rel="noreferrer"> Github</a>.
      </footer>
    </div>
  );
}

export default App;
