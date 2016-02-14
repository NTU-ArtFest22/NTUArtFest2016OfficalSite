import React from 'react';
import SponsorElement from './SponsorElement.react';

export default class Sponsor extends React.Component{
	render(){
		return(
			<div>
				<h1 className="sponsor">Sponsors</h1>
				<SponsorElement
				id={0} />
				<SponsorElement
				id={1} />
			</div>
		);
	}
}