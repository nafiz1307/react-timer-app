import React from 'react';
import './App.css';
import TimerList from './components/TimerList';
import TimerListContextProvider from './context/TimerListContext';
import TimerForm from './components/TimerForm';
import Header from './components/Header';


function App() {
  return (
    <TimerListContextProvider>
      <div className="container">
        <div className="app-wrapper">
        <Header/>
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
