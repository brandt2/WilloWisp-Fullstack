import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = state => {
  return ({
    errors: state.errors.session
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createNewUser: user => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);