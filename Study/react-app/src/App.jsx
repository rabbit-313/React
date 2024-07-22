import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { StyledJsx } from "./components/StyledJsx";
import { CssModules } from "./components/CssModules";
import { StyledComponents } from "./components/StyledComponents";
export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    alert();
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}> Hello World</h1>
      <ColoredMessage />
      <ColoredMessage color="blue">you good?</ColoredMessage>
      <ColoredMessage color="pink">I'm good</ColoredMessage>
      <button onClick={onClickButton}> Click</button>
      <p>{num}</p>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </>
  );
};
