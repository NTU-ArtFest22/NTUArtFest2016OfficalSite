import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import { Link, Element, Events } from 'react-scroll';

export default class ProductsPhoto extends React.Component{

	constructor(){
		super();
		this.state={
			left: 0,
			arrowLeft:0
		};
	}

	componentDidMount(){
		//let element = ReactDOM.findDOMNode(this);
		//console.log(element);
		//console.log("window.innerWidth = " + window.innerWidth + " element width = " + this.props.width);
		let productsLeft = ( window.innerWidth - this.props.width )/2;
		let arrow = ( window.innerWidth - this.props.arrowWidth )/2;
		this.setState({
			left: productsLeft,
			arrowLeft: arrow
		});
		//console.log("productsLeft = " + productsLeft);
		Events.scrollEvent.register('begin', function() {
	      //console.log("begin", arguments);
	    });

	    Events.scrollEvent.register('end', function() {
	      //console.log("end", arguments);
	    });

	}

	componentWillUnmount(){
	    Events.scrollEvent.remove('begin');
	    Events.scrollEvent.remove('end');
  	}

	render(){


		let photoStyles={
			left: this.state.left-this.props.margin,
			width: this.props.width,
			height: this.props.height,
			margin: this.props.margin
		}

		let arrowStyles = {
			position: 'absolute',
			left: this.state.arrowLeft,
			top: '90%'
		}

		let name = "product0";

		const{
			props, state
		} = this;

		return(
			<Element name={name}>
				<div className="Products" style={photoStyles}>
				</div>
				<Link activeClass="active" className="photos" to="product1" spy={true} smooth={true} duration={500} ><div className="arrow" style={arrowStyles}></div></Link>
			</Element>
		);
	}
	
}

ProductsPhoto.defaultProps = {
    width:"",
    height:"",
    margin:"",
    arrowWidth:""
}