import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {

  componentDidMount(){
    this.props.fetchPhoto(this.props.photoId);
  }

  componentDidUpdate(prevProps){
    if(this.props.photoId !== prevProps.photoId){
      this.props.fetchPhoto(this.props.photoId)
    }
  }

  // componentWillReceiveProps(newProps){
  //   newProps.fetchPhoto(newProps.match.params.photoId)
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("should update")
  //   if (nextProps.match.params.photoId !== this.props.match.params.photoId){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // componentWillUpdate(nextProps){
  //   let photoId = nextProps.match.params.photoId
  //   nextProps.fetchPhoto(photoId)
  // }

  render () {
    // let prev = this.props.photo.id;
    // if (prev - 1 > 0) {
    //   prev -= 1;
    //   prev;
    // }

    // let next = this.props.photo.id;
    // if (next < this.props.totalImages){
    //   next += 1;
    //   next;
    // }

    if (this.props.photo === undefined) return null;
    const test = this.props.photo.owner_id === this.props.currentUserId ? <Link to={`/photos/${this.props.photo.id}/edit`}><i class="fas fa-edit"></i> Edit</Link> : null;

    return (
      <div>
        <div className="photo-show-image-div">
          <div className="back-to-index">
            <Link to="/photos"><i class="fas fa-arrow-left"></i> Back to index</Link>
            {/* <Link to={`/photos/${prev}`}><i class="fas fa-arrow-left"></i> back 1 image</Link>
            <Link to={`/photos/${next}`}><i class="fas fa-arrow-left"></i> move up image</Link> */}
          </div>
          <img className="photo-show-image" src={this.props.photo.photoUrl} alt="" />
        </div>
        <div className="photo-info">
          <div className="photo-info-section">
            {test}
            <h1 className="title">{this.props.photo.title}</h1>
            <h2 className="description">{this.props.photo.description}</h2>
          </div>
        </div>
      </div>
    )
  }

}

export default PhotoShow;