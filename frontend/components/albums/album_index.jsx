import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {

  componentDidMount(){
    this.props.fetchAlbums();
  }

  render(){
    let albums = this.props.albums.map( album => {
      return (
        <AlbumIndexItem 
          key={album.id}
          album={album}
        />
      )
    })

    return (
      <div>
        {albums}
      </div>
    )

  }
}

export default AlbumIndex;