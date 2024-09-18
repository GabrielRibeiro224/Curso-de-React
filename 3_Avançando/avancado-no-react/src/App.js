import "./App.css";

import City from "./assets/cidade-2.jpg";
import ManageData from "./components/ManageData";
import CarDetails from "./components/CarDetails";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";
import { useState } from "react";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "Sabugo";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Preto", newCar: true, km: 0 },
    { id: 2, brand: "VW", color: "Vermelho", newCar: false, km: 2000 },
    { id: 3, brand: "Fiat", color: "Verde", newCar: false, km: 240 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, nome: "Gabriel", idade: 19, profissão: "Programador" },
    { id: 2, nome: "Leonardo", idade: 20, profissão: "Veterinário" },
    { id: 3, nome: "Maria", idade: 16, profissão: "Atendente" },
    { id: 4, nome: "Miguel", idade: 17, profissão: "Estudante" },
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* imagem dentro de public*/}
      <div>
        <img src="/paisagem.jpg" alt="Paisagem" />
      </div>

      {/* imagem dentro de assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Preto" km={4500} newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing...">
        <p>Este é o container</p>
      </Container>
      {/* execute function */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissão={user.profissão}
        />
      ))}
    </div>
  );
}

export default App;
