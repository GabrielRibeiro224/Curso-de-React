import style from "./Car.module.css";

const Car = ({ car }) => {
  return (
    <div className={style.card}>
      <h1>{car.name}</h1>
      <p>Cor: {car.color}</p>
      <p>KM: {car.km}</p>
    </div>
  );
};

export default Car;
