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

    console.log({ checkpoint, resource })
    Actions.toggleComplete({ checkpoint, resource});
  }

  handleHover(id, status){
    console.log(id, status);
  }

  render() {
    let { model, context } = this.props;
    let { title, description, instructions, resources, waypoint } = model;
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
    }

    return (
      <div>
        <section className="panel-content_header">
          <CheckpointMap handleComplete={ this.handleComplete.bind(this, null) } model={ model }/>
        </section>
        <section className="panel-content_main">
          <hgroup>
            <h1 className="title editable">{ title }</h1>
          </hgroup>
          <section className="meta">
            <p>Resources: { resources.length }</p>
          </section>
          { context === 'sidebar' && descriptionSection() }
          { context === 'sidebar' && instructionsSection() }
          { context === 'card' && <TodoList handleHover={ this.handleHover.bind(this) }handleComplete={ this.handleComplete.bind(this) } collection={ resources }/> }
        </section>
      </div>
    )
  }
};

CheckpointSection.propTypes = {
  model: React.PropTypes.object
}

export default CheckpointSection;
