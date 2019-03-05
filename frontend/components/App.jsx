import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import CreatePhotoFormContainer from './photos/create_photo_form_container';
import EditPhotoFormContainer from './photos/edit_photo_form_container';
import SecondNavBar from './second_nav_bar/second_nav_bar_container';
import AlbumIndexContainer from './albums/album_index_container';
import AlbumShowContainer from './albums/album_show_container';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path ="/" component={Splash} />
    <Route path="/photos" component={SecondNavBar} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Switch>
      <Route exact path="/photos/new" component={CreatePhotoFormContainer} />
      <Route exact path="/photos/:photoId/edit" component={EditPhotoFormContainer} />
      <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
      <Route exact path="/photos" component={PhotoIndexContainer} />
      <Route exact path="/albums" component={AlbumIndexContainer} />
      <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
    </Switch>
  </div>
);

export default App;