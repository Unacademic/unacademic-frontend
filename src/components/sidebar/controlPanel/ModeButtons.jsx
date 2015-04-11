import React from 'react';
import ModeButton from './ModeButton.jsx';
import R from 'ramda';

class ModeButtons extends React.Component {

  render(){
    let modes = this.props.modes;
    let modeNames = R.keys(modes)
    let createButtons = R.mapIndexed((mode, index) =>
      <ModeButton key={ index } name={ mode } status={ modes[mode] } />);
    let modeButtons = createButtons(modeNames);
    return (
      <section className="mode-buttons">{ modeButtons }</section>
    );
  }
};

ModeButtons.propTypes = {
  modes: React.PropTypes.object,
};

export default ModeButtons;
