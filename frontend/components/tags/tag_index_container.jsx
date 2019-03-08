import { connect } from 'react-redux';
import { fetchTags } from '../../actions/tags_actions';
import TagIndex from './tag_index';

const mapStateToProps = state => {
  let tags = Object.values(state.entities.tags)
  return ({
    tags: tags
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchTags: () => dispatch(fetchTags())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);