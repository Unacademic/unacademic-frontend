import React from "react";

/*eslint new-cap:0 */
import { Mixin } from "react-intro-tour";

let tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: {
    title: "some step",
    text: "empty tour",
    element: ".sidebar",
    position: "left"
  }
};

let Tour = React.createClass({
  mixins: [Mixin(tour)],
  getInitialState: function(){
    this.settings.steps = this.props.tour.steps;
  },
  render: function(){
    return <div className="tour"><div>{ this.props.children }</div></div>;
  }
});

export default Tour;
