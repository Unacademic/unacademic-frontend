import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import WaypointSection from './WaypointSection.jsx';
import CheckpointSection from './CheckpointSection.jsx';
import ResourceSection from './ResourceSection.jsx';
import Actions from '../../actions/index.js';
import WaypointMap from '../maps/WaypointMap.jsx';
import CheckpointMap from '../maps/CheckpointMap.jsx';

class ContentPanel extends React.Component {

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

    let classes = ['panel', 'panel-content', 'panel-top', `panel-is-${level}`].join(' ');

    if(level === 'waypoints'){
      return <section className={ classes }></section>
    }

    return (
      <section className={ classes }>
        <section className="panel-content_header">
          { level === 'waypoint' && <WaypointMap model={ model }/> }
          { level === 'checkpoint' && <CheckpointMap model={ model }/> }
        </section>
        { level === 'waypoint' && <WaypointSection context={ context } level={ level } mode={ mode } model={ model }/> }
        { level === 'checkpoint' && <CheckpointSection context={ context } model={ model }/> }
        { level === 'resource' && <ResourceSection context={ context } model={ model }/> }
      </section>
    )
  }
};

ContentPanel.propTypes = {
  model: React.PropTypes.object
}

export default ContentPanel;
