import React from "react";

import {Cell} from './Cell'
import './Grid.css'

export const Grid = ({gridArr, onClick}) => {
    return (
        <div className="grid">
            {gridArr.map((value, index) => {
                return  <Cell value={value} onClick={() => onClick(index)}/>
            })}
        </div>
    );
}