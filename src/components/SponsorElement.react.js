import React, {PropTypes} from 'react';
import ScrollEffect from '../actions/scroll-effects';
import assign from 'react/lib/Object.assign';
import classNames from 'classNames';

export default class SponsorElement extends React.Component{

	constructor(props) {
	   super(props);  
	}

	render(){
		let topValue = 150 + 150*this.props.id;
		let styles = {
			position: 'absolute',
  			top: topValue
		};
		return(
			<section style = {styles} >
					<ScrollEffect animate="fadeInUp" resumeAnimate="fadeOutDown" type="block" queueClass="queue" id={this.props.id} duration="2" queueDuration="0">
						<ul>
				            <li className="queue">
				                test
				            </li>
				            <li className="queue">
				                test
				            </li>
				            <li className="queue">
				                test
				            </li>
				             <li className="queue">
				                test
				            </li>
				             <li className="queue">
				                test
				            </li>
				             <li className="queue">
				                test
				            </li>
				             <li className="queue">
				                test
				            </li>
				             <li className="queue">
				                test
				            </li>
			            </ul>
			        </ScrollEffect>
			</section>
		);
	}
}

SponsorElement.propTypes = {
	id: PropTypes.number.isRequired
}