import React from 'react';
import { Mixin } from 'react-tour-guide';

let tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: {
    text: 'empty tour',
    element: '.sidebar',
    position: 'left'
  }
}

let Tour = React.createClass({
  mixins: [Mixin(tour)],
  render: function(){
    this.settings.steps = this.props.tour.steps;
    return <div className="tour"><div>{ this.props.children }</div></div>
  }
})

export default Tour;
