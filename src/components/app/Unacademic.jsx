import React from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Main from '../main/Main.jsx';

var TourGuideMixin = require('react-tour-guide').Mixin;

var tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: [
    {
      text: 'Explore a Waypoint- our construct for guided learning!',
      element:  '.btn',
      position: 'bottom-left'
    },
    {
      text: "Here's the Waypoint you just clicked. Here in the Sidebar, you'll always find relevant information for the current level you're on!",
      element: '.title',
      position: 'bottom-right'
    },
    {
      text: "A Waypoint is comprised of Checkpoints, made to break the learning into focused, digestable sections.",
      element: '.btn',
      position: 'left'
    }
  ]
};
var cb = function() {
  console.log('User has completed tour!');
};

var Unacademic = React.createClass({

  mixins: [TourGuideMixin(tour, cb)],

  render: function(){
    let { appState, viewModel } = this.props;
    let currentLevel = appState.levels.current;
    let currentMode = appState.modes.current;
    let { model, collection, url, data } = viewModel;
    let classes = `layout-app layout-app-is-${currentLevel} layout-app-is-${currentMode}`;

      return (
        <section className={ classes }>
          <Sidebar model={ model } appState={ appState }/>
          <Main levels={ appState.levels } collection={ collection } data={ data } />
        </section>
      )
    }
});

module.exports = Unacademic;