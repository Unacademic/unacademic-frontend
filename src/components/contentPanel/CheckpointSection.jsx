import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import marked from 'marked';

let renderer = new marked.Renderer();

class CheckpointSection extends React.Component {

  render() {
    let model = this.props.model;
    let { title, description, instructions, resources, waypoint } = model;
    let type = model.constructor.name.toLowerCase();
    if(!instructions){
      instructions = [];
    }
    if(!resources){
      resources = [];
    }

    let rendereredDescription = {__html: marked(description, { renderer })};

    return (
      <section className="panel-content_main">
        <hgroup>
          <h1 className="title editable">{ title }</h1>
        </hgroup>
        <section className="meta">
          <p>Resources: { resources.length }</p>
        </section>
        <section>
          <h1>Description</h1>
          <div className="editable" dangerouslySetInnerHTML={ rendereredDescription }></div>
        </section>
        <section>
          <h1>Instructions</h1>
          <ul>
          { R.mapIndexed((paragraph, index) => (<li className="editable" key={ index }>{ paragraph }</li>), instructions) }
          </ul>
        </section>
      </section>
    )
  }
};

CheckpointSection.propTypes = {
  model: React.PropTypes.object
}

export default CheckpointSection;
