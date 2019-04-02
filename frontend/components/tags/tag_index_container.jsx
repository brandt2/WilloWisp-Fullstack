import { connect } from 'react-redux';
import { fetchTags } from '../../actions/tags_actions';
import TagIndex from './tag_index';

const mapStateToProps = (state, ownProps) => {
  let tags = Object.values(state.entities.tags);
  let currentUserId = state.session.currentUserId;
  return ({
    tags: tags,
    currentUserId: currentUserId,
    photo: state.entities.photos[ownProps.photoId],
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchTags: () => dispatch(fetchTags())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);