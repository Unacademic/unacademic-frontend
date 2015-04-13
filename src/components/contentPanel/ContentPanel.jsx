import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import WaypointSection from './WaypointSection.jsx';
import CheckpointSection from './CheckpointSection.jsx';
import ResourceSection from './ResourceSection.jsx';

class ContentPanel extends React.Component {

  render() {
    let model = this.props.model;
    let { title, type, image, curator, description, summary, checkpoints } = model;
    type = model.constructor.name.toLowerCase();
    type = type === 'object' ? 'waypoints' : type;

    let classes = ['panel', 'panel-content', 'panel-top', `panel-is-${type}`].join(' ');

    if(type === 'waypoints'){
      return <section className={ classes }></section>
    }

    return (
      <section className={ classes }>
        <section className="panel-content_header">
        </section>
        { type === 'waypoint' && <WaypointSection model={ model }/> }
        { type === 'checkpoint' && <CheckpointSection model={ model }/> }
        { type === 'resource' && <ResourceSection model={ model }/> }
      </section>
    )
  }
};

ContentPanel.propTypes = {
  model: React.PropTypes.object
}

export default ContentPanel;
