import React from 'react';
import Actions from '../../actions/index';

class LevelSheet extends React.Component {

  handleClick(type){
    let selection = { type };
    Actions.setViewModel(selection);
  }

  render() {
    let { mode } = this.props;
    let classes = ['stack_sheet'];
    return (
      <button onClick={ this.handleClick.bind(this, mode) } className={ classes }></button>
    )
  }
};

LevelSheet.propTypes = {
  mode: React.PropTypes.string
}

export default LevelSheet;
