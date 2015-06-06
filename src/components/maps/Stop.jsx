import React from "react";
import R from "ramda";
import Point from "./Point.jsx";
import semiRegularPolygon from "paths-js/semi-regular-polygon";

class Stop extends React.Component {

  constructor(props){
    super(props);
    this.radius = this.props.params.radius;
    this.state = { scale: 1, angle: 140 };
  }

  handleHover(status, resource){
    let { params } = this.props;
    let { checkpoint, highlightPoints} = params;
    let id = 0;
    if(!highlightPoints){
      id = checkpoint.id;
    } else if(highlightPoints && resource) {
      id = resource.id;
    }

    if(id === 0){
      return;
    }
    this.props.handleHover(id, status);
  }

  createShape(x, y, radius, scale, numberOfResources){
    return semiRegularPolygon({
      center: [x, y],
      radii: R.times(() => radius * scale, numberOfResources)
    });
  }

  render() {
    let { params, handleComplete } = this.props;
    let { x, y, radius, checkpoint } = params;
    let { resources } = checkpoint;
    let { scale, angle } = this.state;
    if(checkpoint.highlight){
      scale = scale * 1.7;
    }
    let complete = checkpoint.complete ? "stop-is-complete" : "stop-is-incomplete";
    let numberOfResources = resources.length;
    let strokeWidth = (radius / 10) * scale;

    let shape = this.createShape(x, y, radius, scale, numberOfResources);
    let resourcePoints = R.zip(resources, shape.path.points());

    let points = R.mapIndexed(([resource, point], index) => {
      let [cx, cy] = point;
      return (
        <Point key={ index } resource={ resource } cx={ cx } cy={ cy } strokeWidth={ strokeWidth } handleHover={ this.handleHover.bind(this) } />
      );
    }, resourcePoints);

    let dot = <Point cx={ x } cy={ y } strokeWidth={ strokeWidth } resource = {checkpoint.resources[0]} handleHover={ this.handleHover.bind(this) }/>;

    return (
      <g className="todo" transform={ `rotate(${angle}, ${x}, ${y})` }
        onClick= { handleComplete.bind(this, checkpoint.id) }
        onMouseEnter={ this.handleHover.bind(this, true, null ) }
        onMouseLeave={ this.handleHover.bind(this, false, null ) }>
        <g className={ `stop ${complete}`} >
          <path
            strokeWidth={ strokeWidth }
            d={ shape.path.print() }/>
          { numberOfResources > 1 ? points : dot }
        </g>
      </g>
    );
  }
}

Stop.defaultProps = {
  handleHover: () => {}
};

Stop.propTypes = {
  params: React.PropTypes.object.isRequired,
  handleComplete: React.PropTypes.func.isRequired,
  handleHover: React.PropTypes.func.isRequired
};

export default Stop;

