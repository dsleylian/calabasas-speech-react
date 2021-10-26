import React from "react";
import { connect} from 'react-redux';


const mapStateToProps = state => {
  return {
    CommentsDataUpdated: state.commentsReducer.CommentsDataUpdated
  }
}

function BlogComments(props) {

  console.log(props);
  
  const currentBlog = props.CommentsDataUpdated.filter(comment => comment.blogId === props.blogId)
  

  return (
    <div className="col col-md-10 commentsSection mx-auto my-4">
      {currentBlog.map(comment => {
        return(
        <div key={comment.id} className="individualComment col col-md-9 mx-auto mt-2 "> 
        <div className="">"{comment.text}"</div>
        <div className="">Rating: {comment.rating}</div>
        <div className="comment-text">--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
          
          
          
        </div>
        );
      }
      )
      } 
      {console.log(props.CommentsDataUpdated)}
    </div>
  )
}

export default connect(mapStateToProps)(BlogComments);