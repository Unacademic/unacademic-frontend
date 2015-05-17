import React from 'react';
import R from 'ramda';

class Stop extends React.Component {

  constructor(props){
    super(props);
    this.radius = this.props.params.radius;
    this.state = { radius: this.radius, isActive: false };
  }
  handleEnter(){
    this.setState({ radius: this.radius * 1.5, isActive: true });
  }

  handleLeave(){
    this.setState({radius: this.radius, isActive: false });
  }

  render() {
    let { x, y, center, baseHeight, textY, checkpoint } = this.props.params;
    let { title, resources } = checkpoint;
    let { radius, isActive }= this.state;
    let active= isActive && 'legend-is-active';
    let classes = `legend ${active}`
    let transform = `rotate(270, ${x}, ${y})`

    return (
      <g onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }>
        <g transform={ transform }>
          <line className="line"
            x1={ x + (radius / 2) + 2}
            y1={ y }
            x2={ x + (baseHeight * checkpoint.resources.length)}
            y2={ y }/>
          <circle
            className="stop"
            cx={ x }
            cy={ y }
            r={ radius }
            strokeWidth="3"/>
        </g>
        <text className={ classes }
          textAnchor="middle"
          x={ center } y={ y - textY }>{ title }</text>
      </g>
    )
  }
};


export default Stop;
