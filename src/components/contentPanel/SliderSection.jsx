import React from 'react';
import R from 'ramda';
import Actions from '../../actions/index';

class SliderSection extends React.Component {

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		let model = this.props.model;
		let resource = { resource: model.id };
		let property = { [name]: value };
		let selection = { resource, property };

		Actions.updateCriteria(selection);
	}

  render() {
		let criteriaNames = Object.keys(this.props.criteria);

    let criteriaFields = R.map((fieldName)=> {
      return (
      	<div key={ fieldName } className="slider">
			  	<label htmlFor={ fieldName }>{ fieldName }</label>
					<input type="range" name={ fieldName } min="0" max="5" step="1"
					   value={ this.props.criteria[fieldName] }
					   onChange={ this.handleChange.bind(this) } /><br />
				</div>
      )
    }, criteriaNames)

    return (
			<section className='sliders-container'>
			  { criteriaFields }
			</section>
  	)
  }
}

SliderSection.propTypes = {
	criteria: React.PropTypes.object.isRequired
};

export default SliderSection;