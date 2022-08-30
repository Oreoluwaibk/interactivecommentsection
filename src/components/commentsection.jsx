import React, {useState} from "react";
import Header from "./header";
import CommentChange from "./commentcahnge";
import Body from "./body";
import Comments from "./comments";



function CommentSection (props){

    let [valued, setValued] = useState(0);
    const [toggle, setToggle ] = useState(true);

    function add(){
        // setValued()
        console.log("clicked");
        setValued(valued + 1)
    }
    function substract(){
        setValued (()=>{
            if(valued < 1){
            return valued = 0
        }else{
            return valued - 1
        }
            
        });
    }

    function hide(){
        console.log("clicked");
        setToggle(!toggle)
    }

    return <div className="commenting">
        <div className="commentsection">
        <div className={props.reply} > 
        <CommentChange 
        add ={add} 
        substract={substract} 
        value={valued} />
        </div>

        <div className="post-position">
        <Header 
        hide={hide} 
        avatar ={props.avatar}
        username={props.username}
        date={props.date}
        />
        <Body 
        comments={props.comments}
        />
        </div>
        </div>
        {toggle && <div className = "commentfo" ><Comments cols={35} butname ={props.butname}/> </div>}
    </div>
}

export default CommentSection;