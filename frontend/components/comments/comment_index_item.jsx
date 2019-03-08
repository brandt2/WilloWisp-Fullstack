import React from 'react';

const CommentIndexItem = props => {

  return (
    <div className="comment-outer-div">
      <h2 className="user-name">{props.comment.user.username}</h2>
      <p className="comment-body">
        {props.comment.body}
      </p>
    </div>
  )
}

export default CommentIndexItem;