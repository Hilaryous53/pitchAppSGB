import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Modal from './Modal';

class AddPostButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  handleOpenClick(e) {
    e.preventDefault();
    this.setState({
      showModal: true,
    });
  }

  handleCloseClick(e) {
    e.preventDefault();
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <div>
        <Button
          color="info"
          onClick={this.handleOpenClick}
        >
          Add Post
        </Button>
        <Modal
          closeModal={this.handleCloseClick}
          showModal={this.state.showModal}
        >
          Here is some content for the modal
        </Modal>
      </div>
    );
  }
}

const addPost = {
  marginTop: '30px',
  width: '300px',
  display: 'block',
  margin: 'auto',
  paddingTop: '40px',
}


export default AddPostButton;
