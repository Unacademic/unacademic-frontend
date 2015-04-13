import React from 'react';
import ModeButton from './ModeButton.jsx';
import R from 'ramda';

class ModeButtons extends React.Component {

  render(){
    let { modes, position }= this.props;
    let modeNames = R.keys(modes)
    let createButtons = R.mapIndexed((mode, index) =>
      <ModeButton key={ index } name={ mode } status={ modes[mode] } />);
    let modeButtons = createButtons(modeNames);

    let classes = ['panel', 'panel-modes', `panel-${position}`].join(' ');
    return (
      <section className={ classes }>{ modeButtons }</section>
    );
  }
};

ModeButtons.defaultProps = {
  position: 'right'
}

ModeButtons.propTypes = {
  modes: React.PropTypes.object,
  position: React.PropTypes.string
};

export default ModeButtons;
