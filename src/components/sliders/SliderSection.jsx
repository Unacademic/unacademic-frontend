import React from 'react';
import R from 'ramda';
import Actions from '../../actions/index';
import Slider from './Slider.jsx';

class SliderSection extends React.Component {

  render() {
    let { handleChange, criteria } = this.props;
    let criteriaNames = R.toPairs(criteria);

    let criteriaFields = R.map(([fieldName, value])=> {
      return (
          <Slider key={ fieldName } fieldName={ fieldName } value={  value } handleChange={ handleChange }/>
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
  criteria: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func.isRequired
};

export default SliderSection;
