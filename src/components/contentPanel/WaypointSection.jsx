import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import marked from 'marked';

import Editable from '../editable/Editable.jsx';
import Actions from '../../actions/index.js';

let renderer = new marked.Renderer();

class WaypointSection extends React.Component {

  switchMode(){
    Actions.setMode('curate');
  }

  render() {
    let { mode, model, level } = this.props;
    let { title, image, curator, description, summary, checkpoints } = model;
    let isEditing = mode === 'curate';
    let rendereredDescription = {__html: marked(description, { renderer })};

    return (
      <section onDoubleClick={ this.switchMode.bind(this) } className="panel-content_main">
        <hgroup>
          <Editable fieldName={ 'title' } value={ title } editing={ isEditing }/>
        </hgroup>
        <section className="meta">
          <p>Curator: { curator }</p>
          <p>Checkpoints: { checkpoints.length }</p>
        </section>
        <section>
          <h1>Summary</h1>
          <Editable fieldName={ 'summary' } value={ summary } editing={ isEditing }/>
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
  model: React.PropTypes.object,
  mode: React.PropTypes.string,
  level: React.PropTypes.string
}

export default WaypointSection;
