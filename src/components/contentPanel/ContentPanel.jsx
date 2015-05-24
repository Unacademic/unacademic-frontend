import React from 'react';
import classnames from 'classnames';

import WaypointSection from './WaypointSection.jsx';
import CheckpointSection from './CheckpointSection.jsx';
import ResourceSection from './ResourceSection.jsx';
import Actions from '../../actions/index.js';

class ContentPanel extends React.Component {

  constructor(props){
    super(props);
    this.name = 'container';
  }

  classes(){
    let extendedName = `${this.name}-content`;
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { model, appState, context } = this.props;

    let level;
    let mode;

    if(appState){
      level = appState.levels.current;
      mode = appState.modes.current;
    } else {
      let type = model.constructor.name.toLowerCase();
      level = type === 'object' ? 'waypoints' : type;
    }

    return (
      <div>
        { level === 'waypoints' && null }
        { level === 'waypoint' && <WaypointSection context={ context } level={ level } mode={ mode } model={ model }/> }
        { level === 'checkpoint' && <CheckpointSection context={ context } model={ model }/> }
        { level === 'resource' && <ResourceSection context={ context } model={ model }/> }
      </div>
    )
  }
};

ContentPanel.propTypes = {
  model: React.PropTypes.object
}

export default ContentPanel;
