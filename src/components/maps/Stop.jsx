import React from 'react';
import R from 'ramda';

class Stop extends React.Component {

  constructor(props){
    super(props);
    this.radius = this.props.params.radius;
    this.state = { radius: this.radius, isVisible: false };
  }
  handleEnter(){
    this.setState({ radius: this.radius * 1.5, isVisible: true });
  }

  handleLeave(){
    this.setState({radius: this.radius, isVisible: false });
  }

  render() {
    let { x, y, title } = this.props.params;
    let { radius, isVisible }= this.state;
    let transform = `rotate(270, ${x}, ${y - 90})`

    return (
      <g>
        <circle
          className="stop"
          onMouseEnter={ this.handleEnter.bind(this) }
          onMouseLeave={ this.handleLeave.bind(this) }
          cx={ x }
          cy={ y }
          r={ radius }
          strokeWidth="3"/>
        <text className={ isVisible ? 'visible' : 'hidden' }
          textAnchor="start" transform={ transform }
          x={ x } y={ y - 90 }>{ title }</text>
      </g>
    )
  }
};


export default Stop;
