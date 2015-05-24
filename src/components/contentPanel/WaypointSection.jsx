import React from 'react';
import marked from 'marked';

import WaypointMap from '../maps/WaypointMap.jsx';
import Editable from '../editable/Editable.jsx';
import TodoList from '../todoList/TodoList.jsx';

import Actions from '../../actions/index';

let renderer = new marked.Renderer();

class WaypointSection extends React.Component {

  handleComplete(item){
    let selection = this._getSelection(item);
    Actions.toggleComplete(selection);
  }

  handleHover(item, status){
    let { context } = this.props;
    let selection = this._getSelection(item);
    Actions.setHighlight(selection, status, context);
  }

  _getSelection(item){
    let { model } = this.props;
    let { id } = model;
    let waypoint = { id };
    let checkpoint = { id: item };
    return { waypoint, checkpoint };
  }

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
      <div>
        <section className="panel-content_header">
          <WaypointMap
            handleHover={ this.handleHover.bind(this) }
            handleComplete={ this.handleComplete.bind(this) }
            model={ model }/>
        </section>
        <section className="panel-content_main">
          <hgroup>
            <Editable fieldName={ 'title' } value={ title } editing={ isEditing }/>
          </hgroup>
          <section className="meta">
            <p>Curator: { curator }</p>
          </section>
          <section>
            <h1>Summary</h1>
            <Editable fieldName={ 'summary' } value={ summary } editing={ isEditing }/>
          </section>
          { context === 'sidebar' && descriptionSection() }
          { context === 'card' && <TodoList
              title={ 'Checkpoints' }
              handleHover={ this.handleHover.bind(this) }
              handleComplete={ this.handleComplete.bind(this) }
              collection={ checkpoints }/> }
        </section>
      </div>
    )
  }
};

WaypointSection.propTypes = {
  model: React.PropTypes.object,
  mode: React.PropTypes.string,
  level: React.PropTypes.string
}

export default WaypointSection;
