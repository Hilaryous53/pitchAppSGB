import React, {Component} from 'react';
import GraphService from '../../service/GraphService';
import Moment from 'react-moment';
import { Card, CardBody, CardDeck, CardSubtitle, CardImgOverlay, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import connor from "../../assets/images/connor.jpg";
import shilpi from "../../assets/images/shilpi.jpg";
import emma from "../../assets/images/emma.jpg";

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
				data.forEach(function(post) {
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

	render(){
		return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src= {connor} alt="Card image cap" />
        <CardBody>
          <CardTitle>Gurus</CardTitle>
          <CardSubtitle>Connor Diemand-Yauman</CardSubtitle>
          <CardText>Astrid tells me what to eat. Eli tells me what to say. Together, they model how to act. They’re like inspirational gurus who I can periodically make out with.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={shilpi} alt="Card image cap" />
        <CardBody>
          <CardTitle>Zest</CardTitle>
          <CardSubtitle>Shilpi Kumar</CardSubtitle>
          <CardText>Astrid and Eli are an inspiration for doing everything with more zest: cooking, eating, writing, learning, laughing, running, biking, starting, and especially, loving.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={emma} alt="Card image cap" />
        <CardBody>
          <CardTitle>Shoulder Massage</CardTitle>
          <CardSubtitle>Emma Hodge</CardSubtitle>
          <CardText>Being around Astrid and Eli makes me want to be more generous and give everyone a shoulder massage!</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
	};
};

export default PostFeed;
