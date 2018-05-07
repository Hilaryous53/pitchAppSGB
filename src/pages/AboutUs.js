import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import Header from '../components/about-us/Header';

class AboutUs extends Component {
	render() {
		return (
			<div className="AboutUs">
				<Helmet title="Sheprd - About Us"/>
				<Header/>
			</div>
		);
	}
}

export default AboutUs;
