import React, {Component} from 'react';
import { Col, Row, Container } from 'react-grid-system';
import { Button } from 'reactstrap';
import Background from '../../assets/images/three.jpg'


const jumboBackground = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '700px',
  width: '100%',
  display: 'flex',
};

const jumboInside = {
  textAlign: 'center',
  color: 'white',
  paddingTop: '25%',
  paddingLeft: '10%',
}


class IntroSection extends Component {
	render() {
		return (
      <div style={jumboBackground}>
  	    <div style={jumboInside}>
      	     <h1>Schanz Garbassi Bildner</h1>
             <Button color="info">Add Post</Button>
        </div>
      </div>
	  );
	};
};



export default IntroSection;
