import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/albums_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    album: state.entities.albums[ownProps.match.params.albumId],
    albumId: ownProps.match.params.albumId
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);