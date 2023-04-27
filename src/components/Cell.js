import React from "react";
import './Cell.css'

export const Cell = ({value, onClick}) => {
    let style = value;
    if(value === "X"){
        style = "cellX";
        value = "X";
    } else if(value === "O"){
        style = "cellO";
        value = "O";
    } else if(value === ""){
        style = "cell"
        value = "";
    }

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}
