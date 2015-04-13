import React from 'react';
import R from 'ramda';
import _ from 'lodash';

class MainSection extends React.Component {

  render() {
    let model = this.props.model;
    let { title, image, curator, description, summary, checkpoints } = model;
    let type = model.constructor.name.toLowerCase();
    let classes = ['panel-content_main', `panel-is-${type}`].join(' ');

    return (
      <section className={ classes }>
        <hgroup>
          <h1>{ title }</h1>
        </hgroup>
        <section className="meta">
          <p>Curator: { curator }</p>
          { type === 'waypoint' && <p>Checkpoints: { checkpoints.length }</p>}
        </section>
        <section>
          <h1>Summary</h1>
          <p>{ summary }</p>
        </section>
        <section>
          <h1>Description</h1>
          { R.mapIndexed((paragraph, index) => (<p key={ index }>{ paragraph }</p>), description) }
        </section>
      </section>
    )
  }
};

MainSection.propTypes = {
  model: React.PropTypes.object
}

export default MainSection;
