import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAlbum } from '../../actions/albums_actions';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.albumId)
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

    return (
      <div>
        <h1>{this.props.album.title}</h1>
        <h1>{this.props.album.description}</h1>
        <Link to="/albums">Back to the albums</Link>
        <button onClick={this.handleDelete}>Blow up this album</button>
      </div>
    )
  }

}

export default AlbumShow;