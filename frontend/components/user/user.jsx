import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  return(
    <div>
      <div className="user-section">
        <div className="user-div">
          <h1 className="currentuser-username">{props.currentUser.username}</h1>
        </div>
      </div>

        <div className="third-navbar">
          <ul className="third-navbar-links">
            <li><Link className="to-albums" to="/albums">All Albums</Link></li>
          </ul>
        </div>
    </div>
  )
}