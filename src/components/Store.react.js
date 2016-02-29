import React from 'react';
import ReactDOM from 'react-dom';
import ScrollEffect from '../actions/scroll-effects';
import ProductsPhoto from './ProductsPhoto.react';
import ProductItem from './ProductItem.react';
import ProductLastItem from './ProductLastItem.react';


export default class Store extends React.Component{
	
	render(){

		return(
			<div>
				
				<div id="store"><h1>Store</h1></div>
				<ProductsPhoto
					width="600"
					height="400"
					margin="50"/>
				<ProductItem
					url="url('../images/product.jpg')"
					productID="1"/>
				<ProductItem
					url="url('../images/product.jpg')"
					productID="2"/>
				<ProductLastItem
					url="url('../images/product.jpg')"
					productID="3"/>
			</div>

		);
	}
}