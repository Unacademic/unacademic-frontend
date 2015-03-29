import React from 'react';
import ModeButton from './ModeButton.jsx';
import R from 'ramda';

class ModeButtons extends React.Component {

  render(){
    let createButtons = R.mapIndexed((mode, index) =>
      <ModeButton key={ index } mode={ mode } current={ this.props.mode }/>);
    let modeButtons = createButtons(this.props.modes);
    return (
      <section className="modeButtons">{ modeButtons }</section>
    );
  }
};

ModeButtons.defaultProps = {
  modes: ['browse','learn','curate']
};

ModeButtons.propTypes = {
  modes: React.PropTypes.array,
  mode: React.PropTypes.string
};

export default ModeButtons;
