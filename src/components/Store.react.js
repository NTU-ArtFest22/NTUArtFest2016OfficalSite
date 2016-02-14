import React from 'react';
import ScrollEffect from '../actions/scroll-effects';

export default class Store extends React.Component{
	render(){
		return(
			<div id ="store" >
				<ScrollEffect animate="slideInLeft" resumeAnimate="slideOutLeft" duration="3" >
					<h1 className="StoreSlogan">Store</h1>
				</ScrollEffect>
				<div className="Products">
				</div>
			</div>
		);
	}
}