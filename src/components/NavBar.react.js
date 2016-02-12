import React from 'react';
import Menu from './Menu.react';

export default class NavBar extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	      menu1:{isOpen: false},
	    };
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
		return(
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
	          <div><i className={this.state.menu1.isOpen ? "fa fa-times" : "fa fa-bars"}>MENU</i></div>
	          <div ref="Map">Map</div>
	          <div ref="Project">Project</div>
	          <div ref="Sponsor">Sponsor</div>
	          <div ref="Store">Store</div>
	        </Menu>
		);
	}
}