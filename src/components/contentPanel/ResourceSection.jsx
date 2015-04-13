import React from 'react';
import R from 'ramda';
import _ from 'lodash';

class ResourceSection extends React.Component {

  render() {
    let model = this.props.model;
    let { title, author } = model;
    let type = model.constructor.name.toLowerCase();
    let classes = ['panel-content_main', `panel-is-${type}`].join(' ');

    return (
      <section className={ classes }>
        <hgroup>
          <h1>{ title }</h1>
          <h1>{ author }</h1>
        </hgroup>
      </section>
    )
  }
};

ResourceSection.propTypes = {
  model: React.PropTypes.object
}

export default ResourceSection;
