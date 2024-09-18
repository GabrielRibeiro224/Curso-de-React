import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Products = () => {
  const { counter } = useContext(CounterContext);
  // 5 - context mais complexo
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>Produtos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Products;
