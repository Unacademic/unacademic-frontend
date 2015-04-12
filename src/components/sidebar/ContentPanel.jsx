import React from 'react';
import Actions from '../../../src/actions/index.js';
import R from 'ramda';
import _ from 'lodash';

class ContentPanel extends React.Component {

  render() {
    let model = this.props.model;
    let displayProperties= model.displayProperties;
    let { title, type, image } = model;
    console.log(image);

    let createDisplayItems = R.map((prop)=> {
      let title = _.capitalize(prop);
      let value = model[prop];
      if(_.isArray(value)){
        return (
          <section>
            <p>{ _.capitalize(prop) }</p>
            { R.map((paragraph) => (<p>{ paragraph }</p>), value) }
          </section>
        )
      }

      return (
        <section>
          <p>{ _.capitalize(prop) }: { model[prop] }</p>
        </section>
      )

    });

    let displayItems;

    if(displayProperties){
      displayItems = createDisplayItems(displayProperties);
    }

    return (
      <section className="panel panel-content panel-top">
        <section className="panel-content_header">
          { image && <img src={ image }/>}
        </section>
        <div className="panel-content_main">
          <hgroup>
            <h1>{ type === 'waypoints' ? '' : title }</h1>
          </hgroup>
          { displayItems ? displayItems : null }
        </div>
      </section>
    )
  }
};

ContentPanel.propTypes = {
  model: React.PropTypes.object
}

export default ContentPanel;
