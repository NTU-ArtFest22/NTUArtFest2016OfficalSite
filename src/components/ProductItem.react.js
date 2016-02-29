import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import { Link, Element, Events } from 'react-scroll';

export default class ProductItem extends React.Component{
	constructor(){
		super();
		this.state={
			left:0,
			arrowLeft:0
		};
	}

	componentDidMount(){
		let element = ReactDOM.findDOMNode(this);
		console.log(element);
		//console.log("window.innerWidth = " + window.innerWidth + " element width = " + element.getBoundingClientRect().right);
		let width = element.getBoundingClientRect().right - element.getBoundingClientRect().left
		let productsLeft = ( window.innerWidth - width )/2;
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

		const{
			props, state
		} = this;


		console.log("innerHeight= " + window.innerHeight);
		let styles={
			position: 'absolute',
			top: 768 * (this.props.productID),
			height: 768,
			padding: 150

		}

		let ContainerStyle = {
			margin: 'auto'
		}

		let ProductStyles={
			width: 400,
			height: 400,
			background: this.props.url,
			margin: 45,
			float: 'left'
		}

		let IntroductionStyles={
			float: 'left',
			margin: 45,
			height: 400
		}

		let fontStyles = {
			width: 300,
			height: 300
		}

		let arrowStyles = {
			position: 'absolute',
			left: this.state.arrowLeft,
			top: '83%'
		}

		let UpArrowStyles = {
			position: 'absolute',
			left: this.state.arrowLeft,
			top: '12%'
		}

		let name = 'product'+ this.props.productID;
		let dest = 'product' + (parseInt(this.props.productID)+1);
		let preDest = 'product' + (parseInt(this.props.productID)-1);
		console.log("name = " + name);
		console.log("dest = " + dest );

		return(
			<Element name={name} style={styles}>
				<Link activeClass="active" className={name} to={preDest} spy={true} smooth={true} duration={500} ><div className="UpArrow" style={UpArrowStyles}></div></Link>
				<div style={ContainerStyle}>
					<div style={ProductStyles}></div>
					<div style={IntroductionStyles}>
						<div style={fontStyles}>Aliquam ante ac id. Adipiscing interdum lorem praesent fusce pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum lorem blandit vis ac commodo aliquet integer vulputate phasellus lorem ipsum dolor lorem magna consequat sed etiam adipiscing interdum.</div>
						<button className="button-trigger-overlay">BUY</button>
					</div>
				</div>
				<Link activeClass="active" className={name} to={dest} spy={true} smooth={true} duration={500} ><div className="arrow" style={arrowStyles}></div></Link>

			</Element>
		);
	}
}

ProductItem.defaultProps = {
	url: "",
	productID:"",
	arrowWidth:""
}