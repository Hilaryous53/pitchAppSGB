import React, { Component } from 'react';
import graphUtil from './graph-util';

function makeMutation(message, firstName, lastName) {
  let mutation = `mutation{
  createPost(
    message:"${message}"
    posterFirstName:"${firstName}"
    posterLastName: "${lastName}"
    status: Live
  ) {
    id
  }
}`;
  graphUtil.graphFetch(mutation);
}

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      firstName: '',
      lastName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    makeMutation(this.state.message, this.state.firstName, this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Message">
          Message:
          <input type="text" id="message" value={this.state.message} onChange={this.handleChange} />
        </label>
        <label htmlFor="FirstName">
          First Name:
          <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label htmlFor="LastName">
          Last Name:
          <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </label>

        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PostForm;
