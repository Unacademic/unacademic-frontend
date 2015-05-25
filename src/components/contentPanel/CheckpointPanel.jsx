import React from 'react';
import R from 'ramda';
import marked from 'marked';
import classnames from 'classnames';

import CheckpointMap from '../maps/CheckpointMap.jsx';
import Actions from '../../actions/index';
import ResourceList from './ResourceList.jsx'

let renderer = new marked.Renderer();

class CheckpointPanel extends React.Component {

  constructor(props){
    super(props);
    this.name = 'panel';
  }

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

  classes(){
    return classnames({
      [this.name]: true
    });
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

    let descriptionPanel = ()=> {
      return (
        <section className="description">
          <h1>Description</h1>
          <div className="editable" dangerouslySetInnerHTML={ rendereredDescription }></div>
        </section>
      )
    };

    let instructionsPanel = ()=> {
      return (
        <section>
          <h1>Instructions</h1>
          <ul>
          { R.mapIndexed((paragraph, index) => (<li className="editable" key={ index }>{ paragraph }</li>), instructions) }
          </ul>
        </section>
      )
    };

    return (
      <div className={ this.classes() }>
        <section className={ `step_2 ${this.name}_header` }>
          <CheckpointMap handleHover={ this.handleHover.bind(this) } handleComplete={ this.handleComplete.bind(this, null) } model={ model }/>
        </section>
        <section className={ `${this.name}_main` }>
          <hgroup>
            <h1 className="title editable">{ title }</h1>
          </hgroup>
          { context === 'sidebar' && descriptionPanel() }
          { context === 'sidebar' && instructionsPanel() }
          { context === 'card' && <ResourceList resources={ resources } /> }
        </section>
      </div>
    )
  }
};

CheckpointPanel.propTypes = {
  model: React.PropTypes.object
}

export default CheckpointPanel;
