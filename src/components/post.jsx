import React, { useState } from "react";
import Header from "./header";
import Body from "./body";
import CommentChange from "./commentcahnge";
// import { set } from "lodash";
import Comments from "./comments";
import PersonalComment from "./personalcomment";
import "../index.css"



function Posts(props){
    let [valued, setValued] = useState(0);
    const [toggle, setToggle ] = useState(false);
    const [commentChange, setCommentChange] = useState("");
    const [newReply, setNewReply ] = useState([]); 

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
        setToggle(!toggle)
    }

    function textchange(event){
        const { value } = event.target;
        setCommentChange(()=>{
            return [value];
        })
    }

    function clicked (e){
        setNewReply((prev)=>{
            return [...prev, commentChange]
        })
        setCommentChange("");
        setToggle(false);
        e.preventDefault();
    }

    function deleted (id){
        setNewReply((prev)=>{
            return prev.filter((reply, index)=>{
                console.log(id, index);
                return id !== index
            })
        })
    }


    return <div className="post-return">
    <div className="posts">
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
    {newReply.map((reply, index)=>{
        return <div><PersonalComment 
            key={index}
            id ={index}
            comments={reply} 
            date={`${new Date().getDay()} day ago`} 
            username="julisomo"
            avatar="/images/avatars/image-juliusomo.png"
            delete={deleted}
        /></div>
    })}
    {toggle && 
    <div className = "commentfor" >
    <Comments cols={45} 
    butname={props.butname} 
    buttonclick={clicked}
    value ={commentChange}
    textchange={textchange}
    /> </div>}
    
    </div>
}

export default Posts;