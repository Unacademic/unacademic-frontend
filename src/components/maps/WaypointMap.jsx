import React from 'react';
import R from 'ramda';
import Stop from './Stop.jsx';

class WaypointMap extends React.Component {
  constructor(){
    this.state = {
      height: 245,
      width: 418,
      padding: 30,
      radius: 20
    }
  }
  handleEnter(){
    this.setState({radius: 20});
  }

  handleLeave(){
    this.setState({radius: 10});
  }

  render() {
    let { height, width, radius, padding } = this.state;
    let { checkpoints } = this.props.model;
    let baseLine = height / 2;
    let center = width / 2;
    let interval = ((width - padding * 3) / (checkpoints.length - 1));

    let drawStops = R.mapIndexed((checkpoint, index) => {
      let x = (padding * 1.5) + (index * interval);
      let y = baseLine;
      let textY = baseLine - padding;
      let maxHeight = (textY - padding);
      let maxResources = 2;
      let baseHeight = maxHeight / maxResources;
      let params = { x, y, radius, center, baseHeight, textY, checkpoint }
      return <Stop key={ index } params={ params }/>
    });

    return (
      <svg width={ width } height={ height } className="map">
        <line className="line"
          x1={ 0}
          y1={ baseLine }
          x2={ width }
          y2={ baseLine }
          strokeWidth="5"/>
        { drawStops(checkpoints) }
      </svg>
    )
  }
};

WaypointMap.propTypes = {
  model: React.PropTypes.object
}

export default WaypointMap;
