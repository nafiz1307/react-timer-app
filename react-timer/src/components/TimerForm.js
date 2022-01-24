import React from 'react';

const TimerForm = () => {
  return (
      <form className="form">
          <input type="text"
          className="task-input" placeholder = "Create New Timer" required />

          <div className="buttons">
              <button type="submit" className='btn add-task-btn'> Create Timer</button>
              <button className="btn clear-btn"> Clear </button>
          </div>
      </form>
  )
};

export default TimerForm;
