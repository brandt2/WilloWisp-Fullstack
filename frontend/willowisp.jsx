import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './util/session_api_util';
import { signup } from './util/user_api_util';
import { login } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;

  ReactDOM.render(<Root store={store} />, root);
});