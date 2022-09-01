import React from "react";
import "../../src/index.css"
import Edit from "./edit";
import Delete from "./delete";

function Personalheader (props){
    return <div className="header">
    <div className="details">
    <img src={props.avatar} className="avatar"/>
    <h4>{props.username}</h4>
    <p className="you">you</p>
    <p>{props.date}</p>
    </div>
    <Delete delete={()=>{props.delete(props.id)}}/>
    <Edit edit={props.edit}/>
</div>
}

export default Personalheader;