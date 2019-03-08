import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG
} from '../actions/tags_actions';

const tagsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_TAGS:
      return action.tags
    case RECEIVE_TAG:
      newState = Object.assign({}, oldState, action.tag);
      return newState;
    default:
      return oldState;
  }
}

export default tagsReducer;