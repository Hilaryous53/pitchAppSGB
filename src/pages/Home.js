import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import IntroSection from '../components/home/IntroSection';
import PostFeed from '../components/home/PostFeed';

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<Helmet title="Sheprd - Welcome"/>
				<IntroSection/>
				<PostFeed/>
			</div>
		);
	}
}

export default Home;
