var _ = require('lodash');

var variables = {};

var colors = {
  '--black':      '#000000',
  '--white':      '#FFFFFF',
  '--darkgray':   '#3d3d3d',
  '--mediumgray': '#c0c4c1',
  '--lightgray':  '#f4f6f4',
  '--yellow':     '#E5CF39',
  '--green':      '#A5CC45',
  '--blue':       '#75C7B3',
  '--red':        '#E34D2F'
}

var variables = _.merge(variables, colors);

var grid = {
  '--baseUnit':'30px',
  '--padding': '30px'
}

var variables = _.merge(variables, grid);

var namedColors = {
  '--baseColor': colors['--black'],
  '--inverseColor': colors['--white'],
  '--darkBaseColor': colors['--darkgray'],
  '--betweenBaseColor': colors['--mediumgray'],
  '--lightBaseColor': colors['--lightgray'],
  '--highlightColor': colors['--red']
};

var variables = _.merge(variables, namedColors);

module.exports = variables;
