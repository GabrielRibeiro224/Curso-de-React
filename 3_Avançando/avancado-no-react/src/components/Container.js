const Container = ({ children, myValue }) => {
  return (
    <div>
      <h1>Titulo do container</h1>
      {children}
      <p>Testando algo que o valor é: {myValue}</p>
    </div>
  );
};

export default Container;
