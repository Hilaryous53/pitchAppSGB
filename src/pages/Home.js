import React, {Component} from 'react';
import IntroSection from '../components/home/IntroSection';
import PostFeed from '../components/home/PostFeed';
import AddPostButton from '../components/home/AddPostButton';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<IntroSection/>
				<AddPostButton/>
				<PostFeed/>
			</div>
		);
	}
}

export default Home;
