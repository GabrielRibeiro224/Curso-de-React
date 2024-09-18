import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);

  console.log(number);

  return (
    <div>
      <p>Valor: {someData}</p>
      <button onCLick={() => (someData = 15)}>Mudar variável</button>
      <div>
        <p>valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;
