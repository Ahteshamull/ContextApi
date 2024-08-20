import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const FriendList = () => {
  let [test, setTest] = useState(" ");
  let { setName } = useContext(UserContext);

  let handleInput = (e) => {
    setTest(e.target.value);
  };
  let handleSubmit = () => {
    setName(test);
  };
  return (
    <div className="relative text-center mt-20 border outline-none border-teal-500 border-b-0 py-5 w-[200px] h-[150px] mx-auto">
      <input
        onChange={handleInput}
        className="border  border-red-400"
        type="text"
      />
      <button
        className="bg-blue-500 text-white rounded-sm mt-5 px-2 py-1"
        onClick={handleSubmit}
      >
        Submit
      </button>
      
    </div>
  );
};

export default FriendList;
