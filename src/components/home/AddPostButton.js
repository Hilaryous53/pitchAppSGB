import React from 'react';
import { Button } from 'reactstrap';
import Modal from './Modal';

const AddPostButton = (props) => (
  <div>
    <Button
      color="info"
      onClick={props.openClick}
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


export default AddPostButton;
