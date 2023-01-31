import React, { useState } from "react";
import Heading from "./Heading";
import List from "./List";

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
  function deleteItem(id){
    setItems(prevItems =>{
      return prevItems.filter(
        (item, index) => {
          return !index == id;
        });
    });
  }
  return (
    <div className="container">
    <Heading />
      <div className="form">
        <input onChange={handleChange} value={toDo} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => <List text={item} key={index} onChecked={deleteItem} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
