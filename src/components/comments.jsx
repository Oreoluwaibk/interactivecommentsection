import React from "react";
import Button from "./button";

function Comments(props){
    return <div className="comment">
    <img src="/images/avatars/image-juliusomo.png" className="avatar"/>
    <form className="form">

    <textarea rows={4} cols={props.cols} placeholder=" Add a comment..." value={props.value} onChange={props.textchange} />
    
    <Button 
    butname ={props.butname} 
    buttonclick={props.buttonclick}
    />
    </form>
    </div>
}

export default Comments;