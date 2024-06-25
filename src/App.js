import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather place="Lisbon" />
        <p>
          This project was coded by{" "}
          <a
            href="https://github.com/gosiagrajewska"
            target="_blank"
            rel="noreferrer"
          >
            Malgorzata Grajewska
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/gosiagrajewska/weatherapp-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-weatherapp-bygosia.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
