import React from 'react';

import Actions from '../../actions/index';

import SliderSection from '../sliders/SliderSection.jsx';
import ResourceMap from '../maps/ResourceMap.jsx';

class ResourceSection extends React.Component {

  updateCriteria(fieldName, value) {
    let { id } = this.props.model;
    let resource = { id: 1 };
    let property = {[fieldName]: value};
    Actions.updateCriteria({ resource, property });
  }

  render() {
    let { context, model } = this.props;
    let { title, author, url, notes, criteria } = model;
    let type = model.constructor.name.toLowerCase();

    return (
      <div>
        <section className="panel-content_header">
          <ResourceMap criteria={ criteria }/>
        </section>
        <section className="panel-content_main">
          <hgroup>
            <h1 className="title">{ title }</h1>
          </hgroup>
          { context === 'sidebar' && <SliderSection
              handleChange={ this.updateCriteria.bind(this) }
              model={ model }
              criteria={ criteria }/> }
        </section>
      </div>
    )
  }
};

ResourceSection.propTypes = {
  model: React.PropTypes.object,
  context: React.PropTypes.string
}

export default ResourceSection;
