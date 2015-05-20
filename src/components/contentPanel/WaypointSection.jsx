import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import marked from 'marked';

import Editable from '../editable/Editable.jsx';
import TodoList from './TodoList.jsx';

let renderer = new marked.Renderer();

class WaypointSection extends React.Component {

  render() {
    let { mode, model, level, context } = this.props;
    let { id, title, image, curator, description, summary, checkpoints } = model;
    let isEditing = mode === 'curate';
    let rendereredDescription = {__html: marked(description, { renderer })};

    let descriptionSection = ()=> {
      return (
        <section className="description">
          <h1>Description</h1>
          <div className="editable" dangerouslySetInnerHTML={ rendereredDescription }></div>
        </section>
      )
    };

    return (
      <section className="panel-content_main">
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
        { context === 'sidebar' && descriptionSection() }
        { context === 'card' && <TodoList waypoint={ id } collection={ checkpoints }/> }
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
