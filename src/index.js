import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, Link } from 'react-router';
import WebSite from './components/WebSite.react';
import KeyVision from './components/KeyVision.react';
import MainPage from './components/MainPage.react';

// Render the main component into the dom
ReactDOM.render(
	<Router history={browserHistory}>
		<Route name="WebSite" path="/" components={WebSite}/>
	    <Route name="KeyVision" path="/KeyVision" component={KeyVision}/>
	    <Route name="MainPage" path="/MainPage" component={MainPage}/>
    </Router>, document.getElementById('app'));
