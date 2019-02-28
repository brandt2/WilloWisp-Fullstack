import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <ul className="header-list">
      <li><p>Hello, {currentUser.username}</p></li>
      <li><button onClick={logout}>Log Out</button></li>
    </ul>
  ) : (
    <ul className="header-list">
      <li><Link className="login-button" to="/login">Log In</Link></li>
      <div className="signup-button-div">
        <li className="signup-button" ><Link to="/signup">Sign Up</Link></li>
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