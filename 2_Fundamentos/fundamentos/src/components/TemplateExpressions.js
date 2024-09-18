const TemplateExpressions = () => {
  const name = "Gabriel";
  const data = {
    age: 31,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Voce atua como: {data.job}</p>
      <p>{10 + 5}</p>
    </div>
  );
};

export default TemplateExpressions;
