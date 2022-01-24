import React, { useContext } from "react";
import { TimerListContext } from "../context/TimerListContext";
import Timer from "./Timer";

const TimerList = () => {
  const { timers } = useContext(TimerListContext);
  return <div>
    <ul className="list">
      {timers.map((timer)=>{
        return <Timer timer ={timer} key={timer.id}/>
      })}
    </ul>
  </div>;
};

export default TimerList;
