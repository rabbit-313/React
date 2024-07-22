import { memo } from "react";
const style = {
  height: "200px",
  backgroundColor: "pink",
  padding: "8x",
};

export const Child4 = memo(() => {
  console.log("Child4 rendering");
  return (
    <div style={style}>
      <p>Child4</p>
    </div>
  );
});
