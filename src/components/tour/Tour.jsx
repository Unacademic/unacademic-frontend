import React from 'react';
import { Mixin } from 'react-tour-guide';
import { steps }from './tour.yml';

let tour = {
  startIndex: 0,
  steps
};

let cb = function() {
  console.log('User has completed tour!');
};

let Tour = React.createClass({
  mixins: [Mixin(tour, cb)],
  render: function(){
    return <div className="tour"><div>{ this.props.children }</div></div>
  }
})

export default Tour;
