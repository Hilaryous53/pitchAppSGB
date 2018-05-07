import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderColumn from './HeaderColumn';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
	}

	render() {
		return (
			<div>
				<HeaderColumn text={'Home'} path="/" />
				<HeaderColumn text={'About SGB'} path="/about-us" />
			</div>
		);
	}
}

export default withRouter(Header);
