import React from 'react';
import { Button } from 'reactstrap';
import Modal from './Modal';

const AddPostButton = (props) => (
  <div>
  <br />
    <Button
    style={buttonStyle}
      color="info"
      onClick={props.openClick}
      block
    >
      Add Post
    </Button>
    <Modal
      closeModal={props.closeClick}
      showModal={props.showModal}
      addPostMutation={props.addPostMutation}
    />
  </div>
);

const addPost = {
  marginTop: '30px',
  width: '300px',
  display: 'block',
  margin: 'auto',
  paddingTop: '40px',
};

const buttonStyle = {
  marginLeft: '10%',
};


export default AddPostButton;
