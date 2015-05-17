import React from 'react';
import R from 'ramda';
import SemiRegularPolygon from 'paths-js/semi-regular-polygon';

class Stop extends React.Component {

  constructor(props){
    super(props);
    this.radius = this.props.params.radius;
    this.state = { multiplier: 1, angle: 145, isActive: false };
  }
  handleEnter(){
    this.setState({ multiplier: 3, isActive: true });
  }

  handleLeave(){
    this.setState({multiplier: 1, isActive: false });
  }

  render() {
    let { x, y, center, baseHeight, radius, textY, checkpoint } = this.props.params;
    let { title, resources } = checkpoint;
    let { multiplier, angle, isActive }= this.state;
    let active= isActive && 'legend-is-active';
    let legendClasses = `legend ${active}`
    let complete = checkpoint.complete && 'stop-is-complete';
    let stopClasses = `stop ${complete}`
    let transform = `rotate(${angle}, ${x}, ${y})`

    let numberOfResources = checkpoint.resources.length;

    let triangle = SemiRegularPolygon({
      center: [x, y],
      radii: R.times(() => radius * multiplier, numberOfResources)
    });

    return (
      <g onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }>
        <g transform={ transform }>
        {  numberOfResources === 1 && <circle className={ stopClasses } cx={ x } cy={ y } r={ (radius / 2) * multiplier } /> }
        {  numberOfResources === 2 && <circle className={ stopClasses } cx={ x } cy={ y + ((radius / 2) * multiplier) } r={ (radius / 2) * multiplier } /> }
        {  numberOfResources === 2 && <circle className={ stopClasses } cx={ x } cy={ y - ((radius / 2) * multiplier) } r={ (radius / 2) * multiplier } /> }
        {  numberOfResources > 2 && <path className={ stopClasses } d={ triangle.path.print() } stroke="white" /> }
        </g>
      </g>
    )
  }
};


export default Stop;
