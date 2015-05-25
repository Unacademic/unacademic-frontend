import React from 'react';
import R from 'ramda';
import _ from 'lodash'
import classnames from 'classnames';

import Actions from '../../actions/index';

import SliderSection from '../sliders/SliderSection.jsx';
import ResourceMap from '../maps/ResourceMap.jsx';

class ResourcePanel extends React.Component {

  constructor(props){
    super(props);
    this.name = 'panel';
  }

  updateCriteria(fieldName, value) {
    let { id } = this.props.model;
    let resource = { id: 1 };
    let property = {[fieldName]: value};
    Actions.updateCriteria({ resource, property });
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { context, model } = this.props;
    let { title, author, url, notes, criteria, tags, time_to_digest } = model;
    let type = model.constructor.name.toLowerCase();
    let tagBlocks = R.map((tag) => <span className="tag">{ _.capitalize(tag) }</span>, tags);
    console.log(tagBlocks);

    return (
      <section className={ this.classes() }>
        <section className={ `${this.name}_header` }>
          <ResourceMap criteria={ criteria }/>
        </section>
        <section className={ `${this.name}_main` }>
          <hgroup>
            <h1 className="title">{ title }</h1>
          </hgroup>
          <section className="panel_section meta">
            <p>Time to Digest: { time_to_digest }</p>
          </section>
          <section>
            <h1>Tags</h1>
            <p>{ tagBlocks }</p>
          </section>
          { context === 'sidebar' && <SliderSection
              handleChange={ this.updateCriteria.bind(this) }
              model={ model }
              criteria={ criteria }/> }
        </section>
        </section>
    )
  }
};

ResourcePanel.propTypes = {
  model: React.PropTypes.object,
  context: React.PropTypes.string
}

export default ResourcePanel;
