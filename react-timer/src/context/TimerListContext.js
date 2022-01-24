import React,{createContext,useState} from 'react';

export const TimerListContext = createContext()

const TimerListContextProvider = (props)=>{
   const [timers,setTimers] = useState([
        {title: "Read a book",id :1},
        {title: "Write a story", id:2},
        {title: " Write code" , id :3}
    ])
    return (
        <TimerListContext.Provider value={{timers}}>
            {props.children}
        </TimerListContext.Provider>
    )
}

export default TimerListContextProvider;
