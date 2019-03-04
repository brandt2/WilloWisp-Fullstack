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
    if (this.props.photo === undefined) return null;
    return (
      <div>
        <div className="photo-show-image-div">
          <div className="back-to-index">
            <Link to="/photos"><i class="fas fa-arrow-left"></i> Back to index</Link>
          </div>
          <img className="photo-show-image" src={this.props.photo.photoUrl} alt="" />
        </div>
        <div className="photo-info">
          <div className="photo-info-section">
            <h1 className="title">{this.props.photo.title}</h1>
            <h2 className="description">{this.props.photo.description}</h2>
          </div>
        </div>
      </div>
    )
  }

}

export default PhotoShow;