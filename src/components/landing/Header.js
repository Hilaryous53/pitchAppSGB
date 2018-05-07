import React, {Component} from 'react';
import './landing.css';

class Header extends Component {
	render() {
		return (
      <div>
        <div id="landing-header">
          <h1>I Wanna Be SGB!</h1>
          <a href="/campgrounds" class="btn btn-lg btn-primary">ENTER</a>
        </div>
        <ul class="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
		);
	}
}






export default Header;
