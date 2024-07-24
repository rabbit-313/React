import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "300px",
  padding: "10px",
  borderRadius: "10px",
};

export const EditButton = (props) => {
  const { isAdmin } = props;

  const contextValue = useContext(AdminFlagContext);
  console.log(contextValue);

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
