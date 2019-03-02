import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto } from '../../actions/photos_actions';

const mapStateToProps = (state, ownProps) => {
  // let photoId = ownProps.match.params.photoId;
  // let photo = state.entities.photos[photoId];
  return ({
    photo: state.entities.photos[ownProps.match.params.photoId],
    photoId: ownProps.match.params.photoId
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);