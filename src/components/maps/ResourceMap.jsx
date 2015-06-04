import React from "react";
import Radar from "./Radar.jsx";

class ResourceMap extends React.Component {
  constructor(){
    this.state = {
      height: 418,
      width: 418,
      padding: 20,
      radius: 418 / 2
    };
  }

  render() {
    let { height, width, padding, radius } = this.state;
    let { criteria } = this.props;
    let data = [criteria];

    radius = radius - padding / 2;

    return (
      <svg viewBox={ `0 ${-padding} ${width} ${height}` } width={ width } height={ height } className="map">
        <Radar data={ data } x={ radius } y={ radius } r={ radius }/>
      </svg>
    );
  }
}

export default ResourceMap;
