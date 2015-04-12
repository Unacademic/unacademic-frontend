import React from 'react';
import Actions from '../../../../actions/index';
import _ from 'lodash';

class ModeButton extends React.Component {

  switchMode(){
    Actions.switchMode(this.props.name);
  }

  render(){
    let classes = this.props.status === 'active' ? 'btn btn-is-active' : 'btn';
    let ref = this.props.name + 'Button';
    let isDisabled = this.props.status === 'disabled';

    return (
      <button ref={ ref } disabled={ isDisabled } className={ classes } onClick={ this.switchMode.bind(this) }>
        { _.capitalize(this.props.name) }
      </button>
    )
  }
};

ModeButton.propTypes = {
  status: React.PropTypes.string,
  name: React.PropTypes.string
};

export default ModeButton;
