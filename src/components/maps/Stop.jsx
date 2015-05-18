import React from 'react';
import R from 'ramda';
import Point from './Point.jsx';
import SemiRegularPolygon from 'paths-js/semi-regular-polygon';

class Stop extends React.Component {

  constructor(props){
    super(props);
    this.radius = this.props.params.radius;
    this.state = { multiplier: 1, angle: 140 };
  }
  handleEnter(){
    this.setState({ multiplier: 2 });
  }

  handleLeave(){
    this.setState({multiplier: 1 });
  }

  render() {
    let { x, y, radius, checkpoint } = this.props.params;
    let { title, resources } = checkpoint;
    let { multiplier, angle }= this.state;
    let complete = checkpoint.complete ? 'stop-is-complete' : 'stop-is-incomplete';
    let numberOfResources = checkpoint.resources.length;
    let strokeWidth = (radius / 10) * multiplier;

    let shape = createShape(x, y, radius, multiplier, numberOfResources);

    let points = R.mapIndexed(([cx, cy], index) => {
      return (
        <Point key={ index } cx={ cx } cy={ cy } strokeWidth={ strokeWidth }/>
      )
    }, shape.path.points());

    let point = <Point cx={ x } cy={ y } strokeWidth={ strokeWidth }/>

    return (
      <g transform={ `rotate(${angle}, ${x}, ${y})` }
        onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }>
        <g className={ `stop ${complete}`} >
          <path
            strokeWidth={ strokeWidth }
            d={ shape.path.print() }/>
          { numberOfResources > 1 ? points : point }
        </g>
      </g>
    )
  }
};


function createShape(x, y, radius, multiplier, numberOfResources){
  return SemiRegularPolygon({
    center: [x, y],
    radii: R.times(() => radius * multiplier, numberOfResources)
  });
}

export default Stop;
