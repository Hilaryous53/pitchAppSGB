import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import three from "../../assets/images/connor.jpg";



class IntroSection extends Component {
	render() {
		return (
	    <div>
	      <Jumbotron fluid style={jumboBackground}>
	        <Container fluid>
	          <h1 className="display-3">Schanz-Garbassi Bildner</h1>
	          <p className="lead">We all want to be them. But at least we can be around them.</p>
	        </Container>
	      </Jumbotron>
	    </div>
	  );
	};
};


 const jumboBackground = {
	 // background: '#eef7fa',
	 fontWeight: 'bold',
	 fontSize: 300,
 };



export default IntroSection;
