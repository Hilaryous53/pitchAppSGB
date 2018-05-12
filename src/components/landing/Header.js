import React from 'react';
import './landing.css';

// TODO: Hil the empty 'li's make it hard for me to know where the images come from
//  any way we can reference the source of the image files?

const Header = () => (
  <div id="body">
    <div id="landing-header">
      <h1>I Wanna Be SGB!</h1>
      <a href="/home" className="btn btn-lg btn-primary">ENTER</a>
    </div>
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default Header;
