// require('normalize.css');
// require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import {  Link } from 'react-router';

export default class WebSite extends React.Component {

	constructor(){
		super();
		this.state = {
			left: 0,
			gap: 0
		};
	}

	componentDidMount(){
		let element = ReactDOM.findDOMNode(this).children[0];
		let childNumber = ReactDOM.findDOMNode(this).children.length;
		let padding = 20;
		let width = element.getBoundingClientRect().right - element.getBoundingClientRect().left; //width with padding
		//console.log("childNumber = " + childNumber);
		let leftOffset = (window.innerWidth - width*childNumber - padding*2 ) /2;
		this.setState({
			left: leftOffset,
			gap: width
		});
	}

	render() {

		let button1Styles = {
			position: 'absolute',
			left: this.state.left
		}
		
		let button2Styles = {
			position: 'absolute',
			left: this.state.left + this.state.gap
		}

		return(
			<div>
				  <div className="button" style={button1Styles}><Link className="btn btn-sm animated-button victoria-three" to="/KeyVision">KeyVision</Link></div>
		          <div className="button" style={button2Styles}><Link className="btn btn-sm animated-button victoria-three" to="/OverView">MainPage</Link></div>
			</div>
		);
	}
}

