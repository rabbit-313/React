import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("App rendering");
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    setCount(count + 1);
  };

  const onClickReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>Button</button>
      <p>{count}</p>
      <Child1 noClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
