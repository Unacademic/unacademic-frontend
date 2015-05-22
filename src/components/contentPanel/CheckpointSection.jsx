import React from 'react';
import R from 'ramda';
import _ from 'lodash';
import marked from 'marked';
import CheckpointMap from '../maps/CheckpointMap.jsx';
import Actions from '../../actions/index';
import TodoList from './TodoList.jsx';

let renderer = new marked.Renderer();

class CheckpointSection extends React.Component {

  handleComplete(item){
    let id = this.props.model.id;
    let checkpoint ={ id };

    if(item){
      let resource = { id: item };
    }

    Actions.toggleComplete({ checkpoint, resource});
  }

  handleHover(item, status){
    let { context } = this.props;
    let selection = this._getSelection(item);
    // Actions.setHighlight(selection, status, context);
  }

  _getSelection(item){
    let { model } = this.props;
    let { id } = model;
    let checkpoint = { id };
    let resource = { id: item };
    return { checkpoint, resource };
  }

  render() {
    let { model, context } = this.props;
    let { title, highlight, description, instructions, resources, waypoint } = model;
    let type = model.constructor.name.toLowerCase();
    if(!instructions){
      instructions = [];
    }
    if(!resources){
      resources = [];
    }

    let rendereredDescription = {__html: marked(description, { renderer })};

    let descriptionSection = ()=> {
      return (
        <section className="description">
          <h1>Description</h1>
          <div className="editable" dangerouslySetInnerHTML={ rendereredDescription }></div>
        </section>
      )
    };

    let instructionsSection = ()=> {
      return (
        <section>
          <h1>Instructions</h1>
          <ul>
          { R.mapIndexed((paragraph, index) => (<li className="editable" key={ index }>{ paragraph }</li>), instructions) }
          </ul>
        </section>
      )
    };

    let resourceList = ()=> {
      return (
        <ul>
          <li className="resource">Hello</li>
        </ul>
      )
    };

    return (
      <div>
        <section className="panel-content_header">
          <CheckpointMap handleHover={ this.handleHover.bind(this) } handleComplete={ this.handleComplete.bind(this, null) } model={ model }/>
        </section>
        <section className="panel-content_main">
          <hgroup>
            <h1 className="title editable">{ title }</h1>
          </hgroup>
          { context === 'sidebar' && descriptionSection() }
          { context === 'sidebar' && instructionsSection() }
          { context === 'card' && resourceList() }
        </section>
      </div>
    )
  }
};

CheckpointSection.propTypes = {
  model: React.PropTypes.object
}

export default CheckpointSection;
