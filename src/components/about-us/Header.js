import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div id="Section1" className="ui stackable centered grid">
				<div className="sixteen wide row" style={{paddingBottom: '0px'}}>
					<div className="ui fluid image">
						<div className="heroImageBackground aboutus"/>
						<div className="heroTextBackground"/>
						<div className="heroText">
							Safe, reliable, easy-to-use student transportation
							<div className="heroSubText">
								Meet the team building new & improved ideas for better student transportation.
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
