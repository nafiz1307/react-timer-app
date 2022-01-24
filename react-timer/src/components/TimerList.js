import React, { useContext } from "react";
import { TimerListContext } from "../context/TimerListContext";

const TimerList = () => {
  const { tasks } = useContext(TimerListContext);
  return <div>Timer List</div>;
};

export default TimerList;
