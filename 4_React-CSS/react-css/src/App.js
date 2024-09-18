import "./App.css";
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";

import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("Gabriel");

  const redTitle = false;

  const cars = [
    { id: 1, brand: "VW", color: "Azul", newCar: false, km: 350 },
    { id: 2, brand: "Volvo", color: "Vermelho", newCar: true, km: 0 },
    { id: 3, brand: "Fiat", color: "Preto", newCar: false, km: 400 },
  ];

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponents />
      <p>Este parágrafo é do app.js</p>
      {/* inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Elemento estilizado de forma inline
      </p>
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Elemento estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Gabriel"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
