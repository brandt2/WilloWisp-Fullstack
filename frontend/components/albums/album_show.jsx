import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {

  componentDidMount(){
    this.props.fetchAlbum(this.props.albumId)
  }

  componentDidUpdate(prevProps){
    if (this.props.albumId !== prevProps.albumId){
      this.props.fetchAlbum(this.props.albumId)
    }
  }

  render () {

    if (this.props.album === undefined) return null;

    return (
      <div>
        <h1>{this.props.album.title}</h1>
        <h1>{this.props.album.description}</h1>
        <Link to="/albums">Back to the albums</Link>
      </div>
    )
  }

}

export default AlbumShow;