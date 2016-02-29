import React from 'react';
import ReactDOM from 'react-dom';

export default class Project extends React.Component{

	constructor(){
		super();
		this.state={
			left: 0
		}
	}
	componentDidMount(){
		let element = ReactDOM.findDOMNode(this);
		let width = element.getBoundingClientRect().right - element.getBoundingClientRect().left;
		let offset = (window.innerWidth - width)/2;
		this.setState({
			left: offset
		});

	}


	render(){
		let styles = {
			left: this.state.left,
			top: 868
		}

		return(
			<div className="projectSection" style={styles}>
				<button className="btn btn-default">sort</button>
		        <ul className="sortTags">
		            <button className="btn btn-default exhi">展覽</button>
		            <button className="btn btn-default showw">表演</button>
		            <button className="btn btn-default music">音樂</button>
		            <button className="btn btn-default day">日策展</button>
		            <button className="btn btn-default night">夜策展</button>
		            <button className="btn btn-default dream">夢策展</button>
		            <button className="btn btn-default r2d2">R2D2策展</button>
		            <button className="btn btn-default all">全選</button>
		            <button className="btn btn-default clear">清空</button>
		        </ul>
		        <div className="submitButton"></div>
		        <ul id="allProjects">
		            <li className="project">
		                <img src="../images/1.jpg"/> 
		                <a href="#">Read more</a>
		            </li>
		            <li className="project">
		                <img src="../images/2.jpg"/> 
		                <a href="#">Read more</a>
		            </li>
		            <li className="project">
		                <img src="../images/4.jpg"/> 
		                <a href="#">Read more</a>
		            </li>
		            <li className="project">
		                <img src="../images/5.jpg"/> 
		                <a href="#">Read more</a>
		            </li>
		            <li className="project">
		                <img src="../images/6.jpg"/> 
		                <a href="#">Read more</a>
		            </li>
		            <li className="project">
		                <img src="../images/7.gif"/> 
		                <a href="#">Read more</a>
		            </li>

		        </ul>
			</div>
		);
	}
}