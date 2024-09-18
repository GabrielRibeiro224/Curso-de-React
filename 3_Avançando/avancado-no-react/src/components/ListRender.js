import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Gabriel", "Pedro", "João", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Gabriel", age: 21 },
    { id: 2, name: "João", age: 22 },
    { id: 3, name: "Pedro", age: 24 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>deleteRandom</button>
    </div>
  );
};

export default ListRender;
