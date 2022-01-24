import React,{createContext,useState} from 'react';

export const TimerListContext = createContext()

const TimerListContextProvider = ()=>{
   const [tasks,setTasks] = useState([
        {task : "Read a book",id :1},
        {task : "Write a story", id:2},
        {task : " Write code" , id :3}
    ])
    return (
        <div>Timer List Context</div>
    )
}

export default TimerListContextProvider;
