const UserDetails = ({ nome, idade, profissão }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissão}</p>
      {idade >= 18 ? <p>Pode tirar habilitação</p> : <p>Menor de idade.</p>}
    </div>
  );
};

export default UserDetails;
