import React,{useContext} from 'react';
import { TimerListContext } from '../context/TimerListContext';

const Timer = ({timer}) => {

    const{removeTimer,findItem,setTimeOn}= useContext(TimerListContext)

  return (
      <li className='list-item'>
          <span>{timer.title}</span>
          <span>{("0" + Math.floor((timer.time/60000)%60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((timer.time/1000)%60)).slice(-2)}:</span>
          <span>{("0" + ((timer.time/10)%100)).slice(-2)}:</span>
          <div>
              <button onClick={()=> removeTimer(timer.id)} className="btn-delete task-btn">
                  <i className='fas fa-trash-alt'></i>
              </button>
              <button onClick={()=>findItem(timer.id)} className="btn-edit task-btn">
                  <i className='fas fa-pen'></i>
              </button>
              <button onClick={()=>setTimeOn(true)} className="btn-edit task-btn">
                  <i className='fas fa-play-circle'></i>
              </button>
              <button onClick={()=>setTimeOn(false)} className="btn-edit task-btn">
                  <i className='fas fa-stop-circle'></i>
              </button>
          </div>
      </li>
  )
};

export default Timer;
