import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import { Link, Element, Events } from 'react-scroll';

export default class ProductsPhoto extends React.Component{

	constructor(){
		super();
		this.state={
			left: 0
		};
	}

	componentDidMount(){
		//let element = ReactDOM.findDOMNode(this);
		//console.log(element);
		//console.log("window.innerWidth = " + window.innerWidth + " element width = " + this.props.width);
		let productsLeft = ( window.innerWidth - this.props.width )/2;
		this.setState({
			left: productsLeft
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

		let styles={
			left: this.state.left-this.props.margin,
			width: this.props.width,
			height: this.props.height,
			margin: this.props.margin
		}
		const{
			props, state
		} = this;

		return(
			<div className="Products" style={styles}>
				<Link activeClass="active" className="photos" to="product1" spy={true} smooth={true} duration={500} ><button>NEXT</button></Link>
			</div>
		);
	}
	
}

ProductsPhoto.defaultProps = {
    width:"",
    height:"",
    margin:""
}