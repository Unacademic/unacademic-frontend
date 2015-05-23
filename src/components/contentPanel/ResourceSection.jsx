import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import SliderSection from './SliderSection.jsx';
import ResourceMap from '../maps/ResourceMap.jsx';

class ResourceSection extends React.Component {

  render() {

    let { context, model } = this.props;
    let { title, author, url, notes, clarity, difficulty, enjoyment, relevance, tempholder } = model;
    let type = model.constructor.name.toLowerCase();

    let criteria = {
      clarity: clarity,
      difficulty: difficulty,
      enjoyment: enjoyment,
      relevance: relevance,
      tempholder: tempholder
    };

    return (
      <div>
        <section className="panel-content_header">
          <ResourceMap criteria={ criteria }/>
        </section>
        <section className="panel-content_main">
          <hgroup>
            <h1 className="title">{ title }</h1>
          </hgroup>
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
