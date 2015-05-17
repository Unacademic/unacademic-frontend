import React from 'react';
import R from 'ramda';
import Stop from './Stop.jsx';

class CheckpointMap extends React.Component {
  constructor(){
    this.state = {
      height: 245,
      width: 418,
      padding: 30,
      radius: 100
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
    let checkpoint = this.props.model;
    let baseLine = height / 2;
    let center = width / 2;
    let x = center;
    let y = baseLine;
    let params = { x, y, radius, center, checkpoint }
    checkpoint.complete = Math.random()<.5;
    return (
      <svg width={ width } height={ height } className="map map-checkpoints">
        <line className="line"
          x1={ 0}
          y1={ baseLine }
          x2={ width }
          y2={ baseLine }
          strokeWidth="25"/>
        <Stop params={ params }/>
      </svg>
    )
  }
};

CheckpointMap.propTypes = {
  model: React.PropTypes.object
}

export default CheckpointMap;
