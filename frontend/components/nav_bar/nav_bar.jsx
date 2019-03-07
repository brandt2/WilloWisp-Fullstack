import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <ul className="header-list">
      <li><Link className="upload-button" to="/photos/new">upload</Link></li>
      <li><p className="to-user">Hello, {currentUser.username}</p></li>
      <li><Link className="to-user" to={`/users/${currentUser.id}`}>You</Link></li>
      <div className="logout-button-div">
        <li><button className="logout-button" onClick={logout}>Log Out</button></li>
      </div>
    </ul>
  ) : (
    <ul className="header-list">
      <li><Link className="login-button" to="/login">Log In</Link></li>
      <div className="signup-button-div">
          <li><Link className="signup-button" to="/signup">Sign Up</Link></li>
      </div>
    </ul>
  );

  let navBarColor = currentUser ? ("header1") : ("header");

  return (
    <header className={navBarColor}>
      <nav className="header-navbar">
      
        <h1 className="navbar-logo"><Link to="/">Will-o'-Wisp</Link></h1>
        {display}

      </nav>
    </header>
  );
};