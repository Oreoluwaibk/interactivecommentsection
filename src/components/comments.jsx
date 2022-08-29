import React from "react";
import Button from "./button";

function Comments(){
    return <div className="comment">
    <img src="/images/avatars/image-juliusomo.png" className="avatar"/>
    <form className="form">

    <textarea rows={4} cols={45} placeholder=" Add a comment..." />
    
    <Button />
    </form>
    </div>
}

export default Comments;