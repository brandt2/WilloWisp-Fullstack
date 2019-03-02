import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <ul className="header-list">
      <li><Link className="login-button" to="/photos/new">Upload Photo</Link></li>
      <li><p>Hello, {currentUser.username}</p></li>
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

  return (
    <header className="header">
      <nav className="header-navbar">
      
        <h1 className="navbar-logo"><Link to="/">Will-o'-Wisp</Link></h1>
        {display}

      </nav>
    </header>
  );
};