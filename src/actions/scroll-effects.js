import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classNames';

export default class ScrollEffect extends React.Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            resumeAnimated: false,
            lastPos: window.scrollY
        };
        var lastPos = 0;
        window.addEventListener('scroll', throttle(200, this.handleScroll.bind(this)));
       
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    _scrollUp(){
        let currPos = window.scrollY;

        if( currPos < this.state.lastPos )
            return true;
        else{
            this.setState({
                lastPos: currPos
            });
            return false;
        }
    }

    _scrollDown(){
        let currPos = window.scrollY;

        if( currPos > this.state.lastPos )
            return true;
        else{
            this.setState({
                lastPos: currPos
            });
            return false;
        } 
    }

    _checkOpen(element){

        let windowHeight = window.innerHeight;
        console.log("in Open, top: " +  element.getBoundingClientRect().top + "  bottom: "+ element.getBoundingClientRect().bottom + "   left:  " + element.getBoundingClientRect().left  + "    right: "+ element.getBoundingClientRect().right + "  id: " + this.props.id  + "  type: " + this.props.type );

        if( this.props.type === "block" ){
            if( element.getBoundingClientRect().top + 50 <= windowHeight && element.getBoundingClientRect().top > windowHeight/10 && this._scrollDown() ){
                return true;
            }else if( element.getBoundingClientRect().top >= -50 && this._scrollUp() ){  
                return true;
            }else
                return false;


        }else if( this.props.type === "text" ){

            if( element.getBoundingClientRect().top <= windowHeight  && element.getBoundingClientRect().top > windowHeight/5 && this._scrollDown() )
                return true;
            else{
                return false;
            }
        }
    }

    _checkResume(element){

        let windowHeight = window.innerHeight;
        console.log("in Resume, top: " +  element.getBoundingClientRect().top + "   bottom: "+ element.getBoundingClientRect().bottom + "  id: " + this.props.id  + "  type: " + this.props.type );

        if( element.getBoundingClientRect().bottom <= 20 && element.getBoundingClientRect().top <= 0 && this._scrollDown() ){
            return true;
        }

        if( this.props.type === "block" ){
             if( element.getBoundingClientRect().top + 80 >= windowHeight && this._scrollUp() ){
                return true;
            }else{
                return false;
            }
        }else if( this.props.type === "text" ){
            console.log("It's text, windowHeight:  " + windowHeight);

            if( element.getBoundingClientRect().top >= windowHeight && this._scrollUp() ){
                console.log("resume text, top: " + element.getBoundingClientRect().top );
                return true;
            }else{
                return false;
            }
        }
    }

    singleAnimate() {
        // this.setState({
        //     animated: true
        // });
        console.log("in singleAnimate");
        var element = ReactDOM.findDOMNode(this);
        if( this.state.animated ){
            if( element.className != null )
                element.className = "animated " + this.props.animate;
        }

        if( this.state.resumeAnimated ){
             if( element.className != null )
                element.className = "animated " + this.props.resumeAnimate;
        }
        /* callback */
        setTimeout(() => {
            this.props.callback();
        }, this.props.duration * 1000);

    }

    queueAnimate() {
        let element = ReactDOM.findDOMNode(this);
        let checkClass = (el) => {
          return el.className === this.props.queueClass;
        };
        let number = 0;
        
        if( this.state.animated ){
            console.log("downAnimation");
            let setClass = (el) => {
              
              el.style.visibility = "hidden";
              setTimeout(() => {
                el.style.visibility = "visible";
                el.className = el.className + ' animated ' + this.props.animate;
              }, number * (this.props.queueDuration * 1000));
              number++;
            };
            let findClass = (element) => {
                 if( element.className != null )
                    element.className = "queue";
                
                Array.prototype.forEach.call(element.childNodes, function(child) {
                  findClass(child);
                  if (checkClass(child)) {
                    setClass(child);
                  }
                });
            };
            /* find queue classes */
            findClass(element);
        }

        if( this.state.resumeAnimated ){
            console.log("upAnimation");

            let setClass = (el) => {
              el.style.visibility = "hidden";
              setTimeout(() => {
                el.style.visibility = "visible";
                el.className = el.className + ' animated ' + this.props.resumeAnimate;
              }, number * (this.props.queueDuration * 1000));
              number++;
            };
            let findClass = (element) => {
                
                if( element.className != null )
                    element.className = "queue";
                Array.prototype.forEach.call(element.childNodes, function(child) {
                  findClass(child);
                  if (checkClass(child)) {
                    setClass(child);
                  }
                });
            };
            /* find queue classes */
            findClass(element);
        }
        

        /* callback */
        setTimeout(() => {
            this.props.callback();
        }, this.props.duration * 1000 * number);
    }

    handleScroll(e) {

        let element = ReactDOM.findDOMNode(this);
        let elementPositionY = element.getBoundingClientRect().top + document.body.scrollTop,
                scrollPositionY = window.scrollY,
                windowHeight = window.innerHeight;
        
        if (!this.state.animated) {
           
            //if( element.getBoundingClientRect().top + 50 <= windowHeight ){
            if( this._checkOpen(element) ){
                console.log("open! id: " + this.props.id );
                let currPos = window.scrollY;

                this.setState({
                    animated: true,
                    resumeAnimated: false,
                    lastPos: currPos       
                });
                this.props.queueClass == "" && this.singleAnimate();
                this.props.queueClass !== "" && this.queueAnimate();

            }

        }else if( this._checkResume(element) ){
            
            console.log("resume! id: " + this.props.id );
            let currPos = window.scrollY;

            this.setState({
                animated: false,
                resumeAnimated: true,
                lastPos: currPos
            });
            this.props.queueClass == "" && this.singleAnimate();
            this.props.queueClass !== "" && this.queueAnimate();
           

        }
        
    }

    render() {
        const {
            props, state
        } = this;

        console.log("in render");
        if( this.state.animated ){
            console.log("animate");
            var classes = classNames({
                'animated': true,
                [props.animate]: true && props.queueClass === ""
            });
            var style = state.animated ? {} : {
                visibility: 'hidden'
            };
        }else{
            console.log("resumeAnimate");
            var classes = classNames({
                'animated': true,
                [props.animate]: false,
                [props.resumeAnimate]: true && props.queueClass === ""
            });
            var style = state.resumeAnimated ? {} : {
                visibility: 'hidden'
            };
        }
        
        classes += ' ' + props.className;
        if (props.duration !== '') {
            style.WebkitAnimationDuration = props.duration + 's';
            style.animationDuration = props.duration + 's';
        }
        return <div className = {classes} style = {style}>{props.children}</div>
    }
}

ScrollEffect.defaultProps = {
    animate: "fadeInUp",
    resumeAnimate: "fadeOutDown",
    offset: 0,
    className: "",
    duration: 1,
    type:"",
    queueDuration: 1,
    queueClass: "",
    id:"",
    callback: () => {}
}

let throttle = (delay, callback) => {
    let previousCall = new Date().getTime();
    return () => {
        let time = new Date().getTime();
        if ((time - previousCall) >= delay) {
            previousCall = time;
            callback.apply(null, arguments);
        }
    };
};
