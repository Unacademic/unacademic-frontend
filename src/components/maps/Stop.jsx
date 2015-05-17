import React from 'react';
import R from 'ramda';

class Stop extends React.Component {

  constructor(props){
    super(props);
    this.radius = this.props.params.radius;
    this.state = { multiplier: 1, isActive: false };
  }
  handleEnter(){
    this.setState({ multiplier: 2, isActive: true });
  }

  handleLeave(){
    this.setState({multiplier: 1, isActive: false });
  }

  render() {
    let { x, y, center, baseHeight, radius, textY, checkpoint } = this.props.params;

    let { title, resources } = checkpoint;
    let { multiplier, isActive }= this.state;
    let active= isActive && 'legend-is-active';
    let legendClasses = `legend ${active}`
    let complete = checkpoint.complete && 'stop-is-complete';
    let stopClasses = `stop ${complete}`
    let transform = `rotate(270, ${x}, ${y})`

    return (
      <g onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }>
        <g transform={ transform }>
          <circle
            className={ stopClasses }
            cx={ x }
            cy={ y }
            r={ radius * multiplier }
            strokeWidth={ 3 * multiplier }/>
        </g>
        <text className={ legendClasses }
          textAnchor="middle"
          x={ center } y={ y - textY }>{ title }</text>
      </g>
    )
  }
};


export default Stop;
