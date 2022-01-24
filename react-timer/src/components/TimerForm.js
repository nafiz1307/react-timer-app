import React, { useContext, useState, useEffect } from "react";
import { TimerListContext } from "../context/TimerListContext";

const TimerForm = () => {
  const { addTimer, clearList, editItem, editTimer } =
    useContext(TimerListContext);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTimer(title);
      setTitle("");
    } else {
      editTimer(title, editItem.id);
      console.log("working");
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Create New Timer"
        required
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
            {editItem ? "Edit Timer" : "Add Timer"}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          {" "}
          Clear{" "}
        </button>
      </div>
    </form>
  );
};

export default TimerForm;
