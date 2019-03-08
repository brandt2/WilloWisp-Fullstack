import * as TagAPIUtil from '../util/tags_api_util';

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";

const receiveAllTags = (tags) => {
  return ({
    type: RECEIVE_ALL_TAGS,
    tags: tags
  })
};

const receiveTag = (tag) => {
  return ({
    type: RECEIVE_TAG,
    tag: tag
  })
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_TAG_ERRORS,
    errors: errors
  })
}

export const fetchTags = () => dispatch => {
  return (
    TagAPIUtil.fetchTags()
      .then( (tags) => dispatch(receiveAllTags(tags)))
  )
}

export const fetchTag = (id) => dispatch => {
  return (
    TagAPIUtil.fetchTag(id)
      .then( (tag) => dispatch(receiveTag(tag)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  )
}

export const createTag = (tag) => dispatch => {
  return (
    TagAPIUtil.createTag(tag)
      .then( (tag) => dispatch(receiveTag(tag)))
      .fail( error => dispatch(receiveErrors(error.responseJSON)))
  )
}