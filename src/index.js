import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, Link } from 'react-router';
import WebSite from './components/WebSite.react';
import KeyVision from './components/KeyVision.react';
import MainPage from './components/MainPage.react';
import Store from './components/Store.react';
import Sponsor from './components/Sponsor.react';

// Render the main component into the dom
ReactDOM.render(
	<Router history={browserHistory}>
		<Route name="WebSite" path="/" components={WebSite}/>
	    <Route name="KeyVision" path="/KeyVision" component={KeyVision}/>
	    <Route name="MainPage" path="/MainPage" component={MainPage}/>
		<Route name="Store"  path="/Store" component={Store}/>
		<Route name="Sponsor" path="/Sponsor" component={Sponsor}/>
    </Router>, document.getElementById('app'));
