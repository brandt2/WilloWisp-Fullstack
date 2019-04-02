import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="splash">
    <div className="slide1"></div>
    <div className="slide2"></div>
    <div className="slide3"></div>
    <div className="slide4"></div>
    <div className="splash-box">
      <h1 className="splash-tagline">Find your inspiration.</h1>
      <br/>
      <h3 className="splash-description">Join the Will-o'-Wisp community, home to billions of photos.</h3>
      <br/>
      <Link to="/photos" className="sign-up">View Photos</Link>
    </div>
  </div>
)