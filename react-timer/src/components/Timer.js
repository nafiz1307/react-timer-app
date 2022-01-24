import React,{useContext} from 'react';
import { TimerListContext } from '../context/TimerListContext';

const Timer = ({timer}) => {

    const{removeTimer,findItem}= useContext(TimerListContext)

  return (
      <li className='list-item'>
          <span>{timer.title}</span>
          <div>
              <button onClick={()=> removeTimer(timer.id)} className="btn-delete task-btn">
                  <i className='fas fa-trash-alt'></i>
              </button>
              <button onClick={()=>findItem(timer.id)} className="btn-edit task-btn">
                  <i className='fas fa-pen'></i>
              </button>
          </div>
      </li>
  )
};

export default Timer;
