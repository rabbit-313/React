export const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentStyle = {
    color: "blue",
    fontSize: "20px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}> Hello World</h1>
      <p style={contentStyle}> This is a start line for my dream</p>
      <button onClick={onClickButton}> Click</button>
    </>
  );
};
