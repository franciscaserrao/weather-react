import "./App.css";
import React from "react";
import Form from "./Form";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form />
      <p>
        Coded by{" "}
        <a
          href="https://github.com/franciscaserrao"
          target="_blank"
          rel="noreferrer"
        >
          Francisca Serrão
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/franciscaserrao"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://github.com/franciscaserrao"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
