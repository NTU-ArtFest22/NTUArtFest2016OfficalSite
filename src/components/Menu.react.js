import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';
import Item from './Item.react';
import MenuIcon from './MenuIcon.react';
import classNames from 'classNames';

export default class Menu extends React.Component{

  constructor(props) {
    super(props);
    this.state = {itemNumber: 1, status: "idle", active: false };
  }

  open() {
    if(this.state.action === "open") return;
    this._open();
  }

  _open() {

    //fint <text> tag
    //let element = ReactDOM.findDOMNode(this).children[0].children[0].children[0];
    this.setState({action: "open", active: true } );
    //element.style.visibility = "hidden";
    this.refs.menuIcon.start();
    this.refs["item"+this.state.itemNumber].start();
  }

  close() {
    if(this.state.action !== "open") return;
    this._close();
  }

  _close() {

    //fint <text> tag
    //let element = ReactDOM.findDOMNode(this).children[0].children[0].children[0];
    this.setState({action: "close", active: false });
    //element.style.visibility = "visible";
    this.refs.menuIcon.reverse();
    for(let i = this.state.itemNumber-1; i > 0; i-=1) {
      this.refs["item"+i].reverse();
    }
  }

  _onOpenEnd(name) {
    if(this.state.action !== "open") return;
    if (this.state.itemNumber < this.props.children.length) {
      this.refs["item"+this.state.itemNumber].start();
      return this.setState({itemNumber: this.state.itemNumber+1});
    }
    if (name === `item${this.props.children.length-1}`)
      if(this.props.onOpen) this.props.onOpen(this.props.name);
  }

  _onCloseEnd(name) {
    if(this.state.action === "open") return;
    if (this.state.itemNumber > 1) {
      if (name === 'item1')
        if(this.props.onClose) this.props.onClose(this.props.name);
      this.setState({itemNumber: this.state.itemNumber-1});
    }
  }

  _onClick() {

    if(this.state.action === "open") this._close();
    else this._open();
  }

  _getItems() {
    const {x, y, width, height, direction, distance, customStyle} = this.props;
    
    let menuIcon;
    let children = [];
    let size = this.props.children.length;
    menuIcon = this.props.children[0];
    for( let i = 1; i < size; i++ ){
      children.push(this.props.children[i]);
      //console.log(this.props.children[i]);
    }

    var classes = "";
    //classes = classNames({ active: this.state.active });
    //console.log("in Menu.react, classes= " + classes );

    let items = [
      <MenuIcon
        ref="menuIcon"
        onClick={this._onClick.bind(this)}
        customClass = {classes}
        customStyle={customStyle}
        width={width}
        height={height}
        x={x}
        y={y}
        key={"menuIcon"} >
        {menuIcon.props.children}
      </MenuIcon>
    ];
    for(let i = 0; i < this.state.itemNumber && i < children.length; i+=1) {
      items.push(
        <Item
          direction={this.props.direction}
          key={i}
          ref={`item${i+1}`}
          name ={`item${i+1}`}
          onOpenAnimationEnd={this._onOpenEnd.bind(this)}
          onCloseAnimationEnd={this._onCloseEnd.bind(this)}
          customStyle={customStyle}
          width={width}
          height={height}
          distance={distance}
          x={direction === "horizontal" ? i*distance + x : x}
          y={direction === "vertical" ? i*distance + y : y} >
          {children[i]}
        </Item>
      );
    }
    return items;
  }

  render() {
    return (
      <div>
        {this._getItems()}
      </div>
    );
  }
}

Menu.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  onCloseAnimationEnd: PropTypes.func,
  customStyle: PropTypes.object,
  customClass: PropTypes.string
}
