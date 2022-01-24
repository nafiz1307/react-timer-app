import React from 'react';
import './App.css';
import TimerList from './components/TimerList';
import TimerListContextProvider from './context/TimerListContext';
import TimerForm from './components/TimerForm';


function App() {
  return (
    <TimerListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TimerForm/>
            <TimerList/>
          </div>
        </div>
      </div>
    </TimerListContextProvider>
    
  );
}

export default App;
