import React,{createContext,useState} from 'react';
import {v4 as uuidv4} from 'uuid'

export const TimerListContext = createContext()

const TimerListContextProvider = (props)=>{
   const [timers,setTimers] = useState([
        {title: "Read a book",id :1},
        {title: "Write a story", id:2},
        {title: " Write code" , id :3}
    ]);

    const[editItem,setEditItem] = useState(null)

    const addTimer = (title)=>{
        setTimers([...timers,{title,id:uuidv4()}])
    }
    const removeTimer = id =>{
        setTimers(timers.filter(timer=>timer.id !==id))
    }

    const clearList=()=>{
        setTimers([])
    }

    const findItem = id=>{
        const item = timers.find(timer=>timer.id===id)
        setEditItem(item);
    }

    const editTimer =(title,id)=>{
        const newTimers = timers.map(timer=>(timer.id===id ? {title,id} : timer));
        console.log(newTimers)
        setTimers(newTimers)
        setEditItem(null);
        
    }

    return (
        <TimerListContext.Provider value={{timers,addTimer,removeTimer,clearList,findItem,editTimer,editItem}}>
            {props.children}
        </TimerListContext.Provider>
    )
}

export default TimerListContextProvider;
