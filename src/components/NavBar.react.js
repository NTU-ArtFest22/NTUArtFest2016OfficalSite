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
			<div className={classes} >
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
		          x={-100} >
		          <div><i className={this.state.menu1.isOpen ? "fa fa-times" : "fa fa-bars"}><text>MENU</text></i></div>
		          <div ref="Map"><a href="#map">Map</a></div>
		          <div ref="Project"><a href="#projects">Project</a></div>
		          <div ref="Sponsor"><Link to="Sponsor">Sponsor</Link></div>
		          <div ref="Store"><Link to="Store">Store</Link></div>
		        </Menu>
	        </div>
		);
	}
}