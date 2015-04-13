import React from 'react';
import R from 'ramda';
import _ from 'lodash';

class CheckpointSection extends React.Component {

  render() {
    let model = this.props.model;
    let { title, description, resources } = model;
    let type = model.constructor.name.toLowerCase();
    let classes = ['panel-content_main', `panel-is-${type}`].join(' ');

    return (
      <section className={ classes }>
        <hgroup>
          <h1>{ title }</h1>
        </hgroup>
        <section className="meta">
          <p>Resources: { resources.length }</p>
        </section>
        <section>
          <h1>Description</h1>
          { R.mapIndexed((paragraph, index) => (<p key={ index }>{ paragraph }</p>), description) }
        </section>
      </section>
    )
  }
};

CheckpointSection.propTypes = {
  model: React.PropTypes.object
}

export default CheckpointSection;
