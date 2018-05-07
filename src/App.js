import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import AboutSGB from './pages/AboutSGB';
import Footer from './components/common/Footer';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-97308187-1');

class GAListener extends React.Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentDidMount() {
		this.sendPageView(this.context.router.history.location);
		this.context.router.history.listen(this.sendPageView);
	}

	sendPageView(location) {
		ReactGA.set({page: location.pathname});
		ReactGA.pageview(location.pathname);
	}

	render() {
		return this.props.children;
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<GAListener>
					<Header/>
					<Route exact path="/" component={Home}/>
					<Route path="/AboutSGB" component={AboutSGB}/>
					<Footer/>
				</GAListener>
			</div>
		);
	}
}

export default App;
