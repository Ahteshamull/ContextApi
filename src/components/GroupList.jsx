import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const GroupList = () => {
  let { name } = useContext(UserContext);

  return <div className="   text-center">{name}</div>;
};

export default GroupList;
