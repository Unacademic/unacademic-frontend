import React from 'react';
import classnames from 'classnames';

import Actions from '../../actions/index';

import SliderSection from '../sliders/SliderSection.jsx';
import ResourceMap from '../maps/ResourceMap.jsx';

class ResourceSection extends React.Component {

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
    let { title, author, url, notes, criteria } = model;
    let type = model.constructor.name.toLowerCase();

    return (
      <section className={ this.classes() }>
        <section className={ `${this.name}_header` }>
          <ResourceMap criteria={ criteria }/>
        </section>
        <section className={ `${this.name}_main` }>
          <hgroup>
            <h1 className="title">{ title }</h1>
          </hgroup>
          { context === 'sidebar' && <SliderSection
              handleChange={ this.updateCriteria.bind(this) }
              model={ model }
              criteria={ criteria }/> }
        </section>
        </section>
    )
  }
};

ResourceSection.propTypes = {
  model: React.PropTypes.object,
  context: React.PropTypes.string
}

export default ResourceSection;
