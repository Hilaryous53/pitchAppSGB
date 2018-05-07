import React from 'react';
import Modal from 'react-responsive-modal';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<Button bsStyle="success">
					<strong>Holy guacamole!</strong> Best check yo self, you are not looking too
					good.
				</Button>
			</div>
		);
	}
}

export default Footer;
