import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import { Link, Element, Events } from 'react-scroll';

export default class ProductLastItem extends React.Component{
	constructor(){
		super();
		this.state={
			left:0
		};
	}

	componentDidMount(){
		let element = ReactDOM.findDOMNode(this);
		console.log(element);
		//console.log("window.innerWidth = " + window.innerWidth + " element width = " + element.getBoundingClientRect().right);
		let width = element.getBoundingClientRect().right - element.getBoundingClientRect().left
		let productsLeft = ( window.innerWidth - width )/2;
		this.setState({
			left: productsLeft
		});
		//console.log("productsLeft = " + productsLeft);


		// Events.scrollEvent.register('begin', function() {
	 //      //console.log("begin", arguments);
	 //    });

	 //    Events.scrollEvent.register('end', function() {
	 //      //console.log("end", arguments);
	 //    });

	}

	// componentWillUnmount(){
	//     Events.scrollEvent.remove('begin');
	//     Events.scrollEvent.remove('end');
 //  	}


	render(){

		const{
			props, state
		} = this;


		console.log("innerHeight= " + window.innerHeight);
		let styles={
			position: 'absolute',
			top: 768 * (this.props.productID),
			left: this.state.left,
			height: 768,
			padding: 55

		}

		let ProductStyles={
			width: '300',
			height: '300',
			background: this.props.url,
			margin: '50',
			float: 'left'
		}

		let IntroductionStyles={
			float: 'left'
		}

		let name = 'product'+ this.props.productID;
		let dest = 'product' + (parseInt(this.props.productID)+1);
		console.log("name = " + name);
		console.log("dest = " + dest );

		return(
			<Element name={name} style={styles}>
			
				<div style={ProductStyles}></div>
				<div style={IntroductionStyles}>
					<div>Introduction</div>
					<button>BUY</button>
				</div>

			</Element>
		);
	}
}

ProductLastItem.defaultProps = {
	url: "",
	productID:""
}