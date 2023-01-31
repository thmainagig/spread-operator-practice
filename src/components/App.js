import React, { useState } from "react";

function App() {
  const [toDo, settoDo] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event){
  const newValue = event.target.value;
  settoDo(newValue);
  }
  function handleClick(){
    setItems( (pretoDo) => { return[...pretoDo, toDo]});
    settoDo("");
  }
  return (
    <div className="container">
    <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={toDo} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
