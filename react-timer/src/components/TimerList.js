import React, { useContext } from "react";
import { TimerListContext } from "../context/TimerListContext";
import Timer from "./Timer";

const TimerList = () => {
  const { timers } = useContext(TimerListContext);
  return (
    <div>
      {timers.length ? (
        <ul className="list">
        {timers.map((timer)=>{
          return <Timer timer ={timer} key={timer.id}/>
        })}
      </ul>
      ) : (
        <div className="no-tasks">No Timers</div>
      )}
  </div>
  )
};

export default TimerList;
