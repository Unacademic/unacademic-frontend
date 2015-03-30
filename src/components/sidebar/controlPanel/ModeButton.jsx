import React from 'react';
import Actions from '../../../actions/index';
import _ from 'lodash';

class ModeButton extends React.Component {

  switchMode(){
    Actions.switchMode(this.props.mode);
  }

  render(){
    let classes = this.props.current === this.props.mode  ? 'active' : null;
    let ref = this.props.mode + 'Button';

    return (
      <button ref={ ref } className={ classes } onClick={ this.switchMode.bind(this) }>
        { _.capitalize(this.props.mode) }
      </button>
    )
  }
};

ModeButton.propTypes = {
  mode: React.PropTypes.string,
  currentMode: React.PropTypes.string
};

export default ModeButton;
