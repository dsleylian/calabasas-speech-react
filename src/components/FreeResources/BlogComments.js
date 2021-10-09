import React from "react";
import { connect} from 'react-redux';


const mapStateToProps = state => {
  return {
      CommentsData: state.commentsReducer.CommentsData
  }
}

function BlogComments(props) {

  console.log(props);
  
  const currentBlog = props.CommentsData.filter(comment => comment.blogId === props.blogId)
  

  return (
    <div>
      {currentBlog.map(comment => {
        return(
        <div key={comment.id}> 
          <div>{comment.text}</div>
          <div>--{comment.author}, {comment.date}</div>
          <div>Rating: {comment.rating}</div>
        </div>
        );
      }
      )
      } 
      {console.log(props.CommentsData)}
    </div>
  )
}

export default connect(mapStateToProps)(BlogComments);