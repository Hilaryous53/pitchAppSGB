import React from 'react';
import { Button } from 'reactstrap';
import { Col, Row, Container } from 'react-grid-system';
import Modal from './Modal';

const AddPostButton = (props) => (
  <div>
  <br />
    <Container>
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Button
          style={buttonStyle}
            outline color="info" block
            onClick={props.openClick}
          >
            Add Post
          </Button>
        </Col>
      </Row>
    </Container>
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
  position: 'relative',
  textAlign: 'center',
};


export default AddPostButton;
