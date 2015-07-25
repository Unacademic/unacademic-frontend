import React from "react";
import R from "ramda";
import Stop from "./Stop.jsx";

class WaypointMap extends React.Component {
  constructor(){
    super();
    this.state = {
      height: 245,
      width: 418,
      padding: 55,
      radius: 20
    };
  };

  render() {

    let { height, width, radius } = this.state;
    let { collection, handleComplete, handleHover } = this.props;
    let baseLine = height / 2;
    let center = width / 2;

    let interval = width / (collection.length + 1);

    let drawStops = R.mapIndexed((checkpoint, index) => {
      let x = interval + (index * interval);
      let y = baseLine;
      let highlightPoints = false;
      let params = { x, y, radius, center, checkpoint, highlightPoints };

      return (
        <Stop handleHover={ handleHover.bind(this) }
          handleComplete={ handleComplete.bind(this) }
          key={ index } params={ params }/>
      );
    });

    return (
      <svg viewBox={ `0 0 ${width} ${height}` }width={ width } height={ height } className="map">
        <line className="line"
          x1={ 0}
          y1={ baseLine }
          x2={ width }
          y2={ baseLine }/>
        { drawStops(collection) }
      </svg>
    );
  };
}
WaypointMap.defaultProps = {
  handleHover: () => null,
  handleComplete: () => null
};

WaypointMap.propTypes = {
  model: React.PropTypes.object
};

export default WaypointMap;
