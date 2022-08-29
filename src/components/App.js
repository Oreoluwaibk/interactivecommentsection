import Posts from './post';
import "../index.css"
import Data from "../data"
import CommentSection from './commentsection';

const {comments, currentUser } = Data;

const [comment1, comment2 ] = comments
console.log(comment1);
console.log(currentUser);
const replies = comment2.replies;
function App() {
  function click (){

  }
  
  return (
    <div className='app'>
      {comments.map((comment)=>{
        return <Posts 
          key={comment.id}
          avatar={comment.user.image.png}
          username={comment.user.username}
          date={comment.createdAt}
          comments={comment.content} 
        />
      })}
      {replies.map((rep) => {
        return <CommentSection 
          key={rep.id}
          avatar={rep.user.image.png}
          username={rep.user.username}
          date={rep.createdAt}
          comments={rep.content}
        />
      })}
    </div>
  );
}

export default App;
