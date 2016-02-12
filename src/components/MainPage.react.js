import React from 'react';
import NavBar from './NavBar.react';
import Map from './Map.react';
import Sponsor from './Sponsor.react';

export default class MainPage extends React.Component {
  render(){
    return (
    	<div>
		      <div id="navBar">
		      	<NavBar />
		      </div>
		      <Map />
		      <Sponsor />
	    </div>
    );
  }
}