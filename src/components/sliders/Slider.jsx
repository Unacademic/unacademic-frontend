import React from "react";

/*eslint camelcase:0 */
class Slider extends React.Component {

  handleChange(event){
    let { fieldName, handleChange } = this.props;
    let value = event.target.value;
    handleChange(fieldName, value);
  }

  render() {
    let { fieldName, value } = this.props;
    let sliderInfo = {
      clarity: {
        properLabel: "Clarity",
        title: "How clearly does this resource explain the subject?"
      },
      difficulty: {
        properLabel: "Difficulty",
        title: "How difficult is this resource to understand?"
      },
      up_to_date: {
        properLabel: "Up to Date",
        title: "How up-to-date is this resource with latest developments in the field?"
      },
      pertinence: {
        properLabel: "Pertinence",
        title: "How relevant is this resource to its Checkpoint?"
      },
      enjoyment: {
        properLabel: "Enjoyment",
        title: "How engaging and fun is this resource?"
      }
    };

    return (
      <div key={ fieldName } className="slider">
      <label htmlFor={ fieldName } title={ sliderInfo[fieldName].title }>{ sliderInfo[fieldName].properLabel }</label>
      <input type="range" name={ fieldName } min="0" max="5" step="1"
      value={ value }
      onChange={ this.handleChange.bind(this) } /><br />
      </div>
    );
  }
}

Slider.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
  handleChange: React.PropTypes.func.isRequired
};

export default Slider;
