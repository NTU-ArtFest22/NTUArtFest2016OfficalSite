import React from 'react';
import ReactDOM from 'react-dom';


export default class Product extends React.component{

	render(){
		let styles={
				width: '500',
				height: '700',
				position: 'absoluate',
				background: this.props.url				

		}

		return(
			<div>
				<div style={styles}></div>
				<div><div>Introduction</div><button>BUY</button></div>
			</div>
		);
	}
}

Product.defaultProps = {
	url: "",
	productID:""
}