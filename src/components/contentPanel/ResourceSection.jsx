import React from 'react';
import R from 'ramda';
import _ from 'lodash';

class ResourceSection extends React.Component {

  render() {
    let model = this.props.model;
    let { title, author, url, notes } = model;
    let type = model.constructor.name.toLowerCase();
    let classes = ['panel-content_main', `panel-is-${type}`].join(' ');

    return (
      <section className={ classes }>
        <section className="meta">
          <p>Title: <a href={ url }>{ title }</a></p>
          { author && <p>Author: { author }</p> }
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
  model: React.PropTypes.object
}

export default ResourceSection;
