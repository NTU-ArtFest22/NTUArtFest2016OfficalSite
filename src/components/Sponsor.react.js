import React from 'react';
import SponsorElement from './SponsorElement.react';

export default class Sponsor extends React.Component{
	render(){
		return(
			<div>
				<SponsorElement
				id={0} />
				<SponsorElement
				id={1} />
			</div>
		);
	}
}