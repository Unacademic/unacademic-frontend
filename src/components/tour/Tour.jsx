import React from "react";
import { mixin } from "react-tour-guide";

let tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: {
    text: "empty tour",
    element: ".sidebar",
    position: "left"
  }
};

let Tour = React.createClass({
  mixins: [mixin(tour)],
  getInitialState: function(){
    this.settings.steps = this.props.tour.steps;
  },
  render: function(){
    return <div className="tour"><div>{ this.props.children }</div></div>;
  }
});

export default Tour;
