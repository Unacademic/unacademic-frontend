import React from 'react';

class Editable extends React.Component {

  render(){
    let { editing, value, fieldName } = this.props;
    let classes = `${fieldName} editable`;

    if(editing){
      return (
        <textarea className={ classes }
          defaultValue={ value }>
        </textarea>
      )
    }

    if(fieldName === 'title'){
      return <h1 className={ classes }>{ value }</h1>
    }

    if(fieldName === 'summary'){
      return <p className={ classes }>{ value }</p>
    }

    return <div className={ classes }>{ value }</div>
  }
}

Editable.propTypes = {
  editing: React.PropTypes.bool,
  value: React.PropTypes.string,
  fieldName: React.PropTypes.string,
}

export default Editable;
