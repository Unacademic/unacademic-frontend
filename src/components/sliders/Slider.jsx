import React from 'react';

class Slider extends React.Component {

  handleChange(event){
    let { fieldName, handleChange } = this.props;
    let value = event.target.value;
    handleChange(fieldName, value);
  }

  render() {
    let { fieldName, value } = this.props;
    let title = {
      clarity: "How clearly does this resource explain the subject?",
      difficulty: "How difficult is this resource to understand?",
      up_to_date: "How up-to-date is this resource with latest developments in the field?",
      pertinence: "How relevant is this resource to its Checkpoint?",
      enjoyment: "How engaging and fun is this resource?",
    };

    return (
      <div key={ fieldName } className="slider">
      <label htmlFor={ fieldName } title={ title[fieldName] }>{ fieldName }</label>
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
