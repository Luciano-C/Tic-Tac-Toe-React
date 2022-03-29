import React from "react";
import "../App.css"


const Square = (props) => {
    return (
        <div className="square" onClick={props.chooseSquare}>
            {props.value}
        </div>
    )

}

export default Square;