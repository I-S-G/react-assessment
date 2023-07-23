import { useContext } from "react";

import "./App.css";
import Child from "./components/Child";
import { CounterContext } from "./context/counter.context";

const App = () => {

  const { count } = useContext(CounterContext);

  return (
    <div className="App">
      <h1>{count}</h1>
      <Child />
      {
        count < 0 && <p>Why so negative?</p>
      }
    </div>
  );
};

export default App;
