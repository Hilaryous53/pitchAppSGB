import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

function renderInput(htmlFor, id, value, handleChange) {
  return (
    <span>
      <br />
      <label htmlFor={htmlFor}>
        <input placeholder={htmlFor} type="text" id={id} value={value} onChange={handleChange} />
      </label>
    </span>
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
      <form style={formStyle} onSubmit={this.handleSubmit}>
      Share your moment with SGB!
        {renderInput('Message', 'message', this.state.message, this.handleChange)}
        {renderInput('FirstName', 'firstName', this.state.firstName, this.handleChange)}
        {renderInput('LastName', 'lastName', this.state.lastName, this.handleChange)}
        <Dropzone onDrop={this.onDrop}>
          <p>Add photo here!</p>
        </Dropzone>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const formStyle = {
  zIndex: 1,
};

export default PostForm;
