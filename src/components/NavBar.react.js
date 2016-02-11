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
	            color: '#fff',
	            textAlign:'center',
	            lineHeight:'50px',
	            backgroundColor: '#E74C3C',
	            border: 'solid 1px #E74C3C',
	            borderRadius: '40%'
	          }}
	          distance={-80}
	          width={50}
	          height={50}
	          y={500}
	          x={-150} >
	          <div><i className={this.state.menu1.isOpen ? "fa fa-times" : "fa fa-bars"}></i></div>
	          <div ref="Map">Map</div>
	          <div ref="Project">Project</div>
	          <div ref="Sponsor">Sponsor</div>
	          <div ref="Store">Store</div>
	        </Menu>
		);
	}
}