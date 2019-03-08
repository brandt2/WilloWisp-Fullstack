import React from 'react';
import { connect } from 'react-redux';
import { createTag } from '../../actions/tags_actions';
import CreateTag from './create_tag';

const mapStateToProps = state => {
  return ({
    errors: state.errors.tags
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createTag: (tag) => dispatch(createTag(tag))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTag);