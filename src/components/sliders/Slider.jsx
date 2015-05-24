import React from 'react';

class Slider extends React.Component {

  handleChange(event){
    let { fieldName, handleChange } = this.props;
    let value = event.target.value;
    handleChange(fieldName, value);
  }

  render() {
    let { fieldName, value } = this.props;
    return (
      <div key={ fieldName } className="slider">
      <label htmlFor={ fieldName }>{ fieldName }</label>
      <input type="range" name={ fieldName } min="0" max="5" step="1"
      value={ value }
      onChange={ this.handleChange.bind(this) } /><br />
      </div>
    )

  }
}

Slider.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
  handleChange: React.PropTypes.func.isRequired
};

export default Slider;
