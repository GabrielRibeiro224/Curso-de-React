import "./App.css";
import Car from "./components/Car";

function App() {
  const myCars = [
    { name: "Fusca", color: "Preto", km: 2000 },
    { name: "Polo", color: "Vermelho", km: 0 },
    { name: "Ônix", color: "Azul", km: 540 },
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
