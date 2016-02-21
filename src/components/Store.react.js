import React from 'react';
import ScrollEffect from '../actions/scroll-effects';
import NavBar from './NavBar.react';

export default class Store extends React.Component{
	

	render(){

		return(
			<div>
				<div id="navBar">
			      	<NavBar />
			    </div>
				<div id ="store" >
					<ScrollEffect animate="slideInLeft" resumeAnimate="slideOutLeft" type="text" duration="3" >
						<div><h1>Store</h1></div>
					</ScrollEffect>
					<div className="Products">
					</div>
				</div>
			</div>

		);
	}
}