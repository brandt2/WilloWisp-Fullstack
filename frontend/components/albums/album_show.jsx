import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.albumId);
    // this.props.fetchPhotos()
  }

  componentDidUpdate(prevProps){
    if (this.props.albumId !== prevProps.albumId){
      this.props.fetchAlbum(this.props.albumId)
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteAlbum(this.props.albumId)
      .then(() => this.props.history.push("/albums"))
  }

  render () {

    if (this.props.album === undefined) return null;

    let photo = this.props.album.photos.map (photo => {
        return (
          <Link to={`/photos/${photo.id}`}><img src={photo.photoUrl} alt="" /></Link>
        )
    })

    return (
      <div className="outer-most-show-div">
        <div className="back-to-album-index">
          <Link to="/albums"><i className="fas fa-arrow-left"></i> Back to albums list</Link>
        </div>
        <div className="album-div">
          <div className="back-image-div">
            <img src={this.props.album.photos[0].photoUrl} alt="" width="100%"/>
          </div>
          <div className="album-info">
            <h1>{this.props.album.title}</h1>
            <h2>{this.props.album.description}</h2>
          </div>
          <div className="album-username">
            <h3>By: {this.props.currentUser.username}</h3>
          </div>
        </div>
        <div>
          {photo}
        </div>
        {/* <button onClick={this.handleDelete}>Blow up this album</button> */}
      </div>
    )
  }

}

export default AlbumShow;