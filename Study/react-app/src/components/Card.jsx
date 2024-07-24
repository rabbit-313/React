import { EditButton } from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  margin: "10px",
  borderRadius: "10px",
  backgroundColor: "lightgray",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Card = (props) => {
  const { isAdmin } = props;

  return (
    <div style={style}>
      <p>愚地独歩</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  );
};
