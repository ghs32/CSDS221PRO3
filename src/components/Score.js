import React from "react";
import $ from "jquery";
import './Score.css'

export const Score = ({scoreValX, scoreValO, player}) => {
    if(!player){
       $(".scoreX").removeClass("shadowX")
       $(".scoreO").addClass("shadowO")
    } else {
        $(".scoreX").addClass("shadowX")
        $(".scoreO").removeClass("shadowO")
    }
    return (
        <div className="scores">
            <div className={"scoreValues scoreX"}>X: {scoreValX}</div>
            <div className={"scoreValues scoreO shadowO"}>O: {scoreValO}</div>
        </div>
    )
}