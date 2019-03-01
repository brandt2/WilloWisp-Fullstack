import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
} from '../actions/photos_actions';
import { merge } from 'lodash/merge';

const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      newState = merge({}, oldState, action.photo);
      return newState;
    case REMOVE_PHOTO:
      newState = merge({}, oldState);
      delete newState[action.photoId];
      return newState;
    default:
      return oldState;
  }
}

export default photosReducer;