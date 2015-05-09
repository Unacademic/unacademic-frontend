import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import marked from 'marked';

let renderer = new marked.Renderer();

class WaypointSection extends React.Component {

  switchMode(mode){
    console.log('hi');
  }

  render() {
    let { mode, model } = this.props;
    let { title, image, curator, description, summary, checkpoints } = model;
    let isEditing = mode === 'curate';
    let rendereredDescription = {__html: marked(description, { renderer })};

    return (
      <section onDoubleClick={ this.switchMode.bind(this) } className="panel-content_main">
        <hgroup>
          <h1 className="title editable">{ title }</h1>
        </hgroup>
        <section className="meta">
          <p>Curator: { curator }</p>
          <p>Checkpoints: { checkpoints.length }</p>
        </section>
        <section>
          <h1>Summary</h1>
          <p className="editable">{ summary }</p>
        </section>
        <section>
          <h1>Description</h1>
          <div className="editable" dangerouslySetInnerHTML={ rendereredDescription }></div>
        </section>
      </section>
    )
  }
};

WaypointSection.propTypes = {
  model: React.PropTypes.object
}

export default WaypointSection;
