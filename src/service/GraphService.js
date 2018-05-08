const GRAPH_ENDPOINT = 'https://api.graph.cool/simple/v1/cjgv9340c0s4901778uf2vl5j';
const GRAPH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjU2MzczMDQsImNsaWVudElkIjoiY2pic2swMXcxMTIwMzAxNzZ1ZDE2MTlndSJ9.3E3lYYU9nixJKdhsZrWN8oh4YyxgejDTj4B-W7dTN6M';
const POST_QUERY = `query {
  allPosts(filter:{
    status: Live
  }) {
    id
    message
    imageURL
    posterLastName
    posterFirstName
    createdAt
  }
}`;


class GraphService {

	getAllPosts() {
		return fetch(GRAPH_ENDPOINT, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': GRAPH_TOKEN
			},
			body: JSON.stringify({query: POST_QUERY})
		}).then((response) => {
			return response.json();
		}).then((data) => {
			let posts = data.data.allPosts;
      posts.sort(function(a,b) {
        return a.createdAt < b.createdAt;
      })

      console.log(posts);

			return posts;
		});
	}
}

export default new GraphService();
