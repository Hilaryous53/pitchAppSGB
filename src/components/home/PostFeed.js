import React from 'react';
import GraphService from '../../service/GraphService';
import Moment from 'react-moment';

class PostFeed extends React.Component {
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

	render() {
		if (this.state.isLoading) {
			return <p>Loading ...</p>;
		}
		return (
			<div>
				{this.state.posts.map(post =>
					<div>
						<img height="60px" src={post.imageURL} alt="{post.imageURL}"/>
						My Message: {post.message}
						Post Time:
						<Moment format="YYYY/MM/DD">
							{post.createdAt}
						</Moment>
					</div>
				)}
			</div>
		);
	}
}

export default PostFeed;
