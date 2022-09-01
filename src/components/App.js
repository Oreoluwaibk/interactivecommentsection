import Posts from './post';
import "../index.css"
import Data from "../data"
import CommentSection from './commentsection';
import PersonalComment from './personalcomment';

const {comments, currentUser } = Data;

const [comment1, comment2 ] = comments;
const [rep1, rep2 ] = comment2.replies;
function App() {
  
  return (
    <div className='app'>
      {comments.map((comment)=>{
        return <Posts 
          key={comment.id}
          avatar={comment.user.image.png}
          username={comment.user.username}
          date={comment.createdAt}
          comments={comment.content}
          butname ="REPLY" 
        />
      })}
      <CommentSection 
        key={rep1.id}
          avatar={rep1.user.image.png}
          username={rep1.user.username}
          date={rep1.createdAt}
          comments={rep1.content}
          butname ="REPLY"
      />
      <PersonalComment 
          key={rep2.id}
          avatar={rep2.user.image.png}
          username={rep2.user.username}
          date={rep2.createdAt}
          comments={rep2.content}
        />
    </div>
  );
}

export default App;
