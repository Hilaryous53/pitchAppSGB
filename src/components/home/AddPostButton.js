import React, {Component} from 'react';
import { Button } from 'reactstrap';
import Modal from './Modal';

class AddPostButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: true,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({
			showModal: true
		})
  }

	render() {
		return (
			<div>
			<Button
				color="info"
				onClick={this.handleClick}>
					Add Post
			</Button>
        <Modal showModal={this.state.showModal}>
          Here is some content for the modal
        </Modal>
			</div>
		);
	}
}


export default AddPostButton;
