// require('normalize.css');
// require('styles/App.css');

import React from 'react';
//import { render } from 'react-dom';
import {  Link, RouteHandler } from 'react-router';
//import {Container} from 'flux/utils';

// import KeyVision from './KeyVision.react';
// import MainPage from './MainPage.react';


export default class WebSite extends React.Component {
 

  render() {
  	return(
  		<div>
    			
  				    <button type="button"><Link to="KeyVision">KeyVision</Link></button>
  	          <button type="button"><Link to="MainPage">MainPage</Link></button>
          
         
  		</div>
  	);
  }
}



// render((
//   <Router history={browserHistory}>
//     <Route name="WebSite" path="/" component={WebSite}>
//       <Route name="KeyVision" path="KeyVision" component={KeyVision}/>
//       <Route name="MainPage" path="MainPage" component={MainPage}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'))

// const WebSiteContainer = Container.create(WebSite);
// export default WebSiteContainer;

