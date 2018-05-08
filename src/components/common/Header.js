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
				<HeaderColumn text={'Landing'} path="/" />
				<HeaderColumn text={'About SGB'} path="/aboutSGB" />
				<HeaderColumn text={'Home'} path="/Home" />
			</div>
		);
	}
}

export default withRouter(Header);
