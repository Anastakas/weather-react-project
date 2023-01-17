import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-flex">
        <Weather defaultCity="Kyiv" />

        <footer>
          Coded by Anastasiya Kasilova and{" "}
          <a
            href="https://github.com/Anastakas/weather-react-project"
            target="_blank"
            rel="noreferrer"
          >
            open-soursed on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
