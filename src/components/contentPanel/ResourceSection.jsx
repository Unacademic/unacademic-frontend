import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import SliderSection from './SliderSection.jsx';

class ResourceSection extends React.Component {

  render() {

    let { context, model } = this.props;
    let { title, author, url, notes, clarity, difficulty, enjoyment, relevance, tempholder } = model;
    let type = model.constructor.name.toLowerCase();
    let classes = ['panel-content_main', `panel-is-${type}`].join(' ');

    let criteria = {
      clarity: clarity,
      difficulty: difficulty,
      enjoyment: enjoyment,
      relevance: relevance,
      tempholder: tempholder
    };

    return (
      <section className={ classes }>
        <section className="meta">
          <p>Title: <a href={ url }>{ title }</a></p>
          { author && <p>Author: { author }</p> }
          { context === 'sidebar' && <SliderSection criteria={ criteria } /> }
        </section>
        <section>
          <h1>Notes</h1>
          { notes && <p>{ notes }</p> }
        </section>
      </section>
    )
  }
};

ResourceSection.propTypes = {
  model: React.PropTypes.object,
  context: React.PropTypes.string
}

export default ResourceSection;
