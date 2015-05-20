import React from 'react';

class Point extends React.Component {
  render() {
    let { cx, cy, strokeWidth } = this.props;
    let pointRadius = strokeWidth * 2;
    return (
      <circle cx={cx}
        cy={cy}
        r={ pointRadius }
        strokeWidth={ strokeWidth }
        className="point"/>
    )
  }
};


export default Point;
