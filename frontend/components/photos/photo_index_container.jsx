import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos } from '../../actions/photos_actions';

const mapStateToProps = state => {
  let photos = Object.values(state.entities.photos)
  return ({
    photos: photos
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchPhotos: () => dispatch(fetchPhotos())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);