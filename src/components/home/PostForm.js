import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';

function renderInput(htmlFor, id, value, handleChange, type) {
  return (
    <div>
      <Label for={htmlFor}>{htmlFor}</Label>
      <Input placeholder={htmlFor} type={type} id={id} value={value} onChange={handleChange} />
      <br />
    </div>
  );
}

function renderSubmit(showSubmitButton) {
  if (showSubmitButton) {
    return (
      <input type="submit" value="Submit" />
    );
  }
  return (
    <p>Loading...</p>
  );
}

function renderDropZone(handleDrop, file) {
  if (file) {
    return (
      <p>{"Photo Added! Click 'Submit' when you're ready"}</p>
    );
  }
  return (
    <Dropzone onDrop={handleDrop}>
      <p>Add photo here!</p>
    </Dropzone>
  );
}


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      firstName: '',
      lastName: '',
      file: '',
      submitIsEnabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    this.setState({
      file: files[0],
    });
  }

  handleChange(event) {
    if (event.target.id === 'message') {
      this.setState({
        message: event.target.value,
      });
    }
    if (event.target.id === 'firstName') {
      this.setState({
        firstName: event.target.value,
      });
    }
    if (event.target.id === 'lastName') {
      this.setState({
        lastName: event.target.value,
      });
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submitIsEnabled: false,
    });
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('upload_preset', 'g1njelpj');

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/phi/image/upload',
      formData,
    );
    this.props.addPostMutation(this.state.message, this.state.firstName, this.state.lastName, response.data.url);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      Tell the world why you love SGB!
        <FormGroup>
          {renderInput('Message', 'message', this.state.message, this.handleChange, 'textarea')}
          {renderInput('FirstName', 'firstName', this.state.firstName, this.handleChange, 'text')}
          {renderInput('LastName', 'lastName', this.state.lastName, this.handleChange, 'text')}
          <br />
          {renderDropZone(this.onDrop, this.state.file)}
        </FormGroup>
        {renderSubmit(this.state.submitIsEnabled)}
      </form>
    );
  }
}

export default PostForm;
