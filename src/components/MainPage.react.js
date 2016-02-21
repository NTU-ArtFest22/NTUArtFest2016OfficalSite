import React from 'react';
import NavBar from './NavBar.react';
import Map from './Map.react';
import Sponsor from './Sponsor.react';
import Store from './Store.react';
import Project from './Project.react'

export default class MainPage extends React.Component {
  render(){
    return (
    	<div>
		      <NavBar />
		      <Map />
		      <Project />
	    </div>
    );
  }
}