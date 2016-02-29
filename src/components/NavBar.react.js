import React from 'react';
import Menu from './Menu.react';
import classNames from 'classNames';
import {  Link } from 'react-router';


export default class NavBar extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      menu1:{isOpen: false},
	      fixed: false
	    };
	    window.addEventListener('scroll', this.handleScroll.bind(this) );
	}

	handleScroll(e){
		if( window.scrollY > 20 ){
			this.setState({ fixed: true });
		}else{
			this.setState({ fixed: false});
		}
	}

	handleOnOpen(name) {
	    this.setState({[name] : {isOpen: true}});
	    console.log("open");
	}

	handleOnClose(name) {
	    this.setState({[name] : {isOpen: false}});
	    console.log("close");
	}

	render(){

		var classes = classNames({ fixedNavBar: this.state.fixed });
		return(
			<div id="navBar" className={classes} >
				<Menu
		          name="menu1"
		          direction="horizontal"
		          onOpen={this.handleOnOpen.bind(this)}
		          onClose={this.handleOnClose.bind(this)}
		          customStyle={{
		            color: '#000',
		            textAlign:'center',
		            lineHeight:'50px',
		          }}
		          distance={-100}
		          width={50}
		          height={50}
		          y={0}
		          x={1180} >
		          <div ref="menu"></div>
		          <div ref="Map"><Link to="/OverView/MainPage">Map</Link></div>
		          <div ref="Project"><Link to="/OverView/MainPage#projects">Project</Link></div>
		          <div ref="Sponsor"><Link to="/OverView/Sponsor">Sponsor</Link></div>
		          <div ref="Store"><Link to="/OverView/Store">Store</Link></div>
		        </Menu>
	        </div>
		);
	}
}