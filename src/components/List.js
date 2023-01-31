import React from "react";

function List(props){
    // const[line, setLine]= useState(false);
    // function handleTap(){
    //     setLine(preValue =>{
    //         return !preValue;
    //     });
    // }
    return(
      <li onClick={ () => {props.onChecked(props.id)}}>{props.text}</li>
    )
}

export default List;
// onClick={handleTap} style={{textDecoration: line ? "line-through" : "none"}}