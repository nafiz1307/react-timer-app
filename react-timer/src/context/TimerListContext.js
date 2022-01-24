import React,{createContext,useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'

export const TimerListContext = createContext()

const TimerListContextProvider = (props)=>{

    const initialState = JSON.parse(localStorage.getItem('timers')) || []

   const [timers,setTimers] = useState(initialState);

    const[editItem,setEditItem] = useState(null);

    const [time, setTime] = useState(0);
    const [timerOn,setTimeOn] = useState(false);

    useEffect(()=>{
        localStorage.setItem('timers',JSON.stringify(timers));
        let interval = null;
        if(timerOn){
            interval = setInterval(()=>{
                setTime(prevTime => prevTime+10)
            },10)
        } else{
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    },[timers,timerOn])

    // useEffect(()=>{
    //     let interval = null;
    //     if(timerOn){
    //         interval = setInterval(()=>{
    //             setTime(prevTime => prevTime+10)
    //         },10)
    //     } else{
    //         clearInterval(interval)
    //     }

    //     return () => clearInterval(interval)
    // },[timerOn]);

    const addTimer = (title)=>{
        setTimers([...timers,{title,id:uuidv4(),time}])
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
        <TimerListContext.Provider value={{timers,addTimer,removeTimer,clearList,findItem,editTimer,editItem,time,setTimeOn}}>
            {props.children}
        </TimerListContext.Provider>
    )
}

export default TimerListContextProvider;
