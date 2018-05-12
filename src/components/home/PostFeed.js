import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';
import { Card, CardBody, CardDeck, CardSubtitle, CardImgOverlay, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Moment from 'react-moment';
import GraphService from '../../service/GraphService';
// document.body.style = 'background: #f6fbfc;';

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
    };
  }

componentDidMount() {
    this.setState({isLoading: true});

		GraphService.getAllPosts()
			.then(data => {
				let allPosts = [];
				data.forEach((post) => {
					if (post.message) {
						allPosts.push(post);
					}
				});
				this.setState({
					posts: allPosts,
					isLoading: false,
				});
			})
			.catch(error => {
				this.setState({
					posts: [],
				});
			});
	}


  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <Container>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            {this.state.posts.map(post =>
              renderPosts(post.imageURL, post.posterFirstName, post.createdAt, post.message)
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}


const postStyle = {
  width: 'auto',
  height: '500px',
  border: '1px solid gray',
  margin: '50px 0px',
};

function renderPosts(img, firstName, created, message) {
  return (
    <Card style={postStyle}>
      <CardImg top width="100%" src={img} alt="Card image cap" />
      <CardBody>
        <CardTitle>{firstName}</CardTitle>
        <CardSubtitle>{created}</CardSubtitle>
        <CardText>{message}</CardText>
      </CardBody>
    </Card>
  );
}


export default PostFeed;
