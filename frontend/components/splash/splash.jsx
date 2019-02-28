import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="splash">
    <h1 className="splash-tagline">Find your inspiration.</h1>
    <br/>
    <h2 className="splash-description">Join the Will-o'-Wisp community, and ignite your passions.</h2>
    <br/>
    <Link to="/signup" className="sign-up">Sign Up</Link>
  </div>
)