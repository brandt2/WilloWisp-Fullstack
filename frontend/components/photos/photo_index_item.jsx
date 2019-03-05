import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props => {

  return (
    <div className="photos-index-div">
      <h1 className="photo-index-title">{props.photo.title}</h1>
      <h3 className="photo-index-username">By {props.photo.user.username}</h3>
      <Link to={`/photos/${props.photo.id}`}><img className="photo-image" src={props.photo.photoUrl} alt="" /></Link>
    </div>
  );
}

export default PhotoIndexItem;