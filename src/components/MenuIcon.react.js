import React, { PropTypes} from 'react';
import assign from 'react/lib/Object.assign';
import {Motion, spring} from 'react-motion';

export default class MenuIcon extends React.Component{
  constructor(props) {
    super(props);
    this.state = {sequence: 0};
    this.params = [
      {
        scaleX : spring(1, [1500,10]),
        scaleY : spring(1, [1500,10]),
      },
      {
        scaleX : spring(0.6, [1500, 50]),
        scaleY : spring(0.6, [1500, 50]),
      },
      {
        scaleX : spring(1, [1500, 10]),
        scaleY : spring(1, [1500, 10]),
      }
    ];
  }

  start() {
    setTimeout(() => this.setState({sequence: 1 }), 100);
    setTimeout(() => this.setState({sequence: 2 }), 150);
  }

  reverse() {
    this.setState({sequence: 1 });
    setTimeout(() => this.setState({sequence: 0 }), 50);
  }

  render() {
    const {x, y, width, height, customStyle, onClick, customClass } = this.props;
    //console.log("classes = " + customClass );
    var buttonClasses = "";
    if( this.props.active ){
      buttonClasses = "c-hamburger c-hamburger--htx active";
    }else{
      buttonClasses = "c-hamburger c-hamburger--htx";
    }

    return (
      
          <Motion style={this.params[this.state.sequence]}>
          {({scaleX, scaleY}) =>
            <div
              onClick={onClick}
              className={customClass}
              style={assign({}, customStyle, {
                transform: `translate3d(${x}px, ${y}px, 0) scaleX(${scaleX}) scaleY(${scaleY})`,
                WebkitTransform: `translate3d(${x}px, ${y}px, 0) scaleX(${scaleX}) scaleY(${scaleY})`,
                position: 'absolute',
                width,
                height
              })} >
              <button className={buttonClasses}>
                <span>toggle menu</span>
              </button>
            </div>
          }
        </Motion>
       
    );
  }
}

MenuIcon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  active: PropTypes.bool,
  customStyle: PropTypes.object,
  customClass: PropTypes.string
}
