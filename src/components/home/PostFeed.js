import React, { Component } from 'react';
import Moment from 'react-moment';
import GraphService from '../../service/GraphService';
import AddPostButton from './AddPostButton';
import graphUtil from './graph-util';

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      isLoading: true,
    });

    GraphService.getAllPosts()
      .then(data => {
        this.setState({
          posts: data,
          isLoading: false,
        });
      }).catch(error => {
        this.setState({
          posts: [],
        });
      });
  }

  handleSubmit(message, firstName, lastName, e) {
    let mutation = `mutation{
    createPost(
      message:"${message}"
      posterFirstName:"${firstName}"
      posterLastName: "${lastName}"
      status: Live
    ) {
      id
      message
      imageURL
      posterLastName
      posterFirstName
      createdAt
    }
  }`;
    graphUtil.graphFetch(mutation)
      .then(data => {
        if (data.data.createPost.id) {
          this.setState({
            isLoading: true,
          });
          GraphService.getAllPosts()
            .then(data2 => {
              this.setState({
                posts: data2,
                isLoading: false,
              });
            }).catch(error => {
              this.setState({
                posts: [],
              });
            });
          this.props.handleCloseClick(e);
        } else {
          console.log("uh oh..." + JSON.stringify(data.data));
        }
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <AddPostButton
          openClick={this.props.handleOpenClick}
          closeClick={this.props.handleCloseClick}
          showModal={this.props.showModal}
          addPostMutation={this.handleSubmit}
        />
        {this.state.posts.map(post => (
          <div>
            <img height="160px" src={post.imageURL} alt="{post.imageURL}" />
            Message: {post.message}
            Post Time:
            <Moment format="YYYY/MM/DD H:mm">
              {post.createdAt}
            </Moment>
          </div>
        ),
        )}
      </div>
    );
  }
}

export default PostFeed;
