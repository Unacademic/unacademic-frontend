import React from 'react';
import R from 'ramda';
import RadarPaths from 'paths-js/radar';

class Radar extends React.Component {
  getCurve(curve, i) {
    var path = curve.polygon.path.print();
    return (
      <path key={ i } d={ path } fill="#E5CF39" strokeWidth="0" stroke="grey"/>
    );
  }

  getRing(ring, i) {
    var path = ring.path.print();
    return (
      <path key={ i  } d={ path } strokeWidth="1" className="ring" stroke="darkgray"/>
    );
  }


  render() {
    let { data, max, r, rings, x, y  } = this.props;
    r = r - 15;
    let paths = RadarPaths({ data, max, r, rings, center: [x, y + 15]  });

    return (
      <g className="radar" fill="none" stroke="3">
      { paths.rings.map(this.getRing.bind(this)) }
      <g opacity="1">
      { paths.curves.map(this.getCurve.bind(this)) }
      </g>
      </g>
    );
  }
};

Radar.defaultProps = {
  data   : [],
  max    : 5,
  r      : 100,
  rings  : 5,
  x      : 0,
  y      : 0
};

export default Radar;
