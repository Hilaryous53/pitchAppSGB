import React, { Component } from 'react';
import IntroSection from '../components/home/IntroSection';
import PostFeed from '../components/home/PostFeed';
<<<<<<< HEAD
import AddPostButton from '../components/home/AddPostButton';
import Background from '../assets/images/three.jpg';
=======
>>>>>>> f19c5681d5cc615a20c87eed1dc9fa1c1ec60ed6

class Home extends Component {
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

  handleCloseClick() {
    this.setState({
      showModal: false,
    });
  }


  render() {
    return (
      <div>
        <IntroSection />
        <PostFeed
          handleOpenClick={this.handleOpenClick}
          handleCloseClick={this.handleCloseClick}
          addPostMutation={this.handleSubmit}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}

export default Home;
