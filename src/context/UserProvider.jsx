import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  let [name, setName] = useState(" ");
  return (
    <UserContext.Provider value={ {name,setName} }>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
