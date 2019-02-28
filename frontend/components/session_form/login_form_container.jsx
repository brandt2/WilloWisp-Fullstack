import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = state => {
  return ({
    errors: state.errors.login
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: user => dispatch(login(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);