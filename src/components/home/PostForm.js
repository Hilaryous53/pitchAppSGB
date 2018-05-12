import React, { Component } from 'react';

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
      pictures: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPostMutation(this.state.message, this.state.firstName, this.state.lastName);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      Tell the world why you love SGB!
        {renderInput('Message', 'message', this.state.message, this.handleChange)}
        {renderInput('FirstName', 'firstName', this.state.firstName, this.handleChange)}
        {renderInput('LastName', 'lastName', this.state.lastName, this.handleChange)}
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PostForm;