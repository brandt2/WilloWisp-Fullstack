import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = props => {

  return (
    <div>
      <h1>{props.album.title}</h1>
      <h2>{props.album.description}</h2>
      <Link to="/photos">click me to go back to photos</Link>
    </div>
  )

}

export default AlbumIndexItem;