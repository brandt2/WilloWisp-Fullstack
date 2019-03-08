import {
  RECEIVE_TAG,
  RECEIVE_TAG_ERRORS
} from '../actions/tags_actions';

const tagsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_TAG:
      return [];
    case RECEIVE_TAG_ERRORS:
      return action.errors
    default:
      return oldState;
  }
}

export default tagsErrorsReducer;