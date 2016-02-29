import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, Link, IndexRoute, HistoryLocation } from 'react-router';
import WebSite from './components/WebSite.react';
import KeyVision from './components/KeyVision.react';
import MainPage from './components/MainPage.react';
import Store from './components/Store.react';
import Sponsor from './components/Sponsor.react';
import NavBar from './components/NavBar.react';
import OverView from './components/OverView.react';

class Example extends React.Component{
	render(){
		return(
			<div>
			 	It is a test!
			</div>
		)
	}
}

// Render the main component into the dom
ReactDOM.render(
	<Router history={ Router.HashLocation}>
		<Route name="WebSite" path="/" components={WebSite}/>
	    <Route name="KeyVision" path="KeyVision" component={KeyVision}/>
	    <Route name="OverView" path="OverView" component={OverView}>

		    <Route name="MainPage" path="MainPage" components={{
		    	navigation: NavBar,
		    	page: MainPage
		    }}/>
	    	
			<Route name="Store"  path="Store" components={{
				navigation: NavBar,
				page: Store
			}}/>
			<Route name="Sponsor" path="Sponsor" components={{
				navigation: NavBar,
				page: Sponsor
			}}/>

		</Route>
    </Router>, document.getElementById('app'));
