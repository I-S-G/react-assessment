import { useContext } from "react";

import { CounterContext } from "../context/counter.context";

const Child = () => {

  const { setCount } = useContext(CounterContext);

  const handleMinusClick = () => {
    setCount((count) => count - 1);
  };

  const handlePlusClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button type="button" className="btn" onClick={handleMinusClick}>
        -
      </button>
      <button type="button" className="btn" onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default Child;
