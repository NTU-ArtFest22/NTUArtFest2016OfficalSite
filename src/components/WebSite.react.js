// require('normalize.css');
// require('styles/App.css');

import React from 'react';
import {  Link } from 'react-router';

export default class WebSite extends React.Component {
 

  render() {
  	return(
  		<div>
  			  <button type="button"><Link to="/KeyVision">KeyVision</Link></button>
  	          <button type="button"><Link to="/OverView">MainPage</Link></button>
  		</div>
  	);
  }
}

