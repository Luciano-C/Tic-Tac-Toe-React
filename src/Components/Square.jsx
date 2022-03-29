import React from "react";
import "../App.css"


const Square = (props) => {
    return (
        <div className="square" id={props.id} onClick={props.chooseSquare} style={props.value==="X" ? {color:"rgb(235, 235, 94)"}: {color:"lightblue"}}>
            {props.value}
        </div>
    )

}

export default Square;