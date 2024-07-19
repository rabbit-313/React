import { ColoredMessage } from "./components/ColoredMessage";
export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}> Hello World</h1>
      <ColoredMessage />
      <ColoredMessage color="blue">you good?</ColoredMessage>
      <ColoredMessage color="pink">I'm good</ColoredMessage>
      <button onClick={onClickButton}> Click</button>
    </>
  );
};
