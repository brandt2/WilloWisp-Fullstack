import React from 'react';
import CommentIndexItem from './comment_index_item';
import CreateCommentContainer from './create_comment_container';

class CommentIndex extends React.Component {

  componentDidMount(){
    this.props.fetchComments();
  }

  render () {
    let comments = this.props.comments.map(comment => {
      return (
        <CommentIndexItem
          key={comment.id}
          comment={comment}
          photoId={this.props.photoId}
        />
      )
    });

    return (
      <div className="comments-section">
        <div className="comment-info">
          {comments}
        </div>
        <div>
          <CreateCommentContainer photoId={this.props.photoId}/>
        </div>
      </div>
    );
  }

}

export default CommentIndex;