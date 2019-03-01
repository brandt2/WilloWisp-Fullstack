import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {

  componentDidMount(){
    let photoId = this.props.match.params.photoId;
    this.props.fetchPhoto(photoId);
  }

  render () {
    if (!this.props.photo) return null;
    return (
      <div>
        <h1>{this.props.photo.title}</h1>
        <h1>{this.props.photo.description}</h1>
        <Link to="/photos">go back to the index</Link>
      </div>
    )
  }

}

export default PhotoShow;