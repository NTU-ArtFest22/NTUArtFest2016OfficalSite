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

    singleAnimate() {
        // this.setState({
        //     animated: true
        // });
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
           
            if( element.getBoundingClientRect().top + 50 <= windowHeight ){
                let currPos = window.scrollY;
                if( currPos > this.state.lastPos ){
                    this.setState({
                        animated: true,
                        resumeAnimated: false,       
                    });
                    this.props.queueClass == "" && this.singleAnimate();
                    this.props.queueClass !== "" && this.queueAnimate();
                }else{
                    this.setState({
                        lastPos: currPos
                    });
                }

            }

        }else if( element.getBoundingClientRect().top + 80 >= windowHeight ){
            
            console.log("top: " +  element.getBoundingClientRect().top + "  id: " + this.props.id );
            let currPos = window.scrollY;
            console.log("currPos = "+ currPos + "   lastPos = "+ this.state.lastPos );
            if( currPos < this.state.lastPos ){
                this.setState({
                    animated: false,
                    resumeAnimated: true,
                    lastPos: currPos
                });
                this.props.queueClass == "" && this.singleAnimate();
                this.props.queueClass !== "" && this.queueAnimate();
            }else{
                this.setState({
                    lastPos: currPos
                });
            }

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
