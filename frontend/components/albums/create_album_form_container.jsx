import { connect } from 'react-redux';
import { createAlbum } from '../../actions/albums_actions';
import CreateAlbumForm from './create_album_form';

const mapStateToProps = state => {
  return ({
    errors: state.errors.albums
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createAlbum: album => dispatch(createAlbum(album))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlbumForm);