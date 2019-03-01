import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render () {
    let photos = this.props.photos.map(photo => {
      return (
        < PhotoIndexItem
          key={photo.id}
          photo={photo}
        />
      )
    });

    return (
      <div>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;