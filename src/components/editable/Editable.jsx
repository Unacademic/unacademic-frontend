import React from "react";
import Actions from "../../actions/index.js";

class Editable extends React.Component {

  updateProp(propName, event){
    let value = event.target.value;
    Actions.updateModelProp({propName, value});
  }

  render(){
    let { editing, value, fieldName } = this.props;
    let classes = `${fieldName} editable`;

    if(editing){
      return (
        <textarea className={ classes }
          onBlur={ this.updateProp.bind(this, fieldName) }
          defaultValue={ value }>
        </textarea>
      );
    }

    if(fieldName === "title"){
      return <h1 className={ classes }>{ value }</h1>;
    }

    if(fieldName === "summary"){
      return <p className={ classes }>{ value }</p>;
    }

    return <div className={ classes }>{ value }</div>;
  }
}

Editable.propTypes = {
  editing: React.PropTypes.bool,
  value: React.PropTypes.string,
  fieldName: React.PropTypes.string
};

export default Editable;
