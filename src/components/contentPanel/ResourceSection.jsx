import React from 'react';
import R from 'ramda';
import _ from 'lodash';

class ResourceSection extends React.Component {

  render() {
    let model = this.props.model;
    console.log(model);
    let { title, author, url } = model;
    let type = model.constructor.name.toLowerCase();
    let classes = ['panel-content_main', `panel-is-${type}`].join(' ');
    console.log(author);

    return (
      <section className={ classes }>
        <section className="meta">
          <p>Title: <a href={ url }>{ title }</a></p>
          { author && <p>Author: { author }</p> }
        </section>
      </section>
    )
  }
};

ResourceSection.propTypes = {
  model: React.PropTypes.object
}

export default ResourceSection;
