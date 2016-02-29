import React from 'react';
import NavBar from './NavBar.react';
import MainPage from './MainPage.react';

export default class OverView extends React.Component{
	render(){
		const { navigation, page } = this.props;
		return(
			<div>
				{navigation || <NavBar/>}
				{page || <MainPage/>}
			</div>
		)
	}
}