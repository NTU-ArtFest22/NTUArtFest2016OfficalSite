import React from 'react';  
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

import WebSite from './WebSite.react';
import KeyVision from './KeyVision.react';
import MainPage from './MainPage.react';
//import routes from './routes';

// Router.run(routes, Router.HistoryLocation, (Handler) => {
//   React.render(<Handler />, document.getElementById('app'));
// });

ReactDOM.render((
	<Router history={browserHistory}>
		<Route name="WebSite" path="/" handler={WebSite}>
	      <Route name="KeyVision" handler={KeyVision}/>
	      <Route name="MainPage" handler={MainPage}/>
	    </Route>
    </Router>
), document.getElementById('app')) 