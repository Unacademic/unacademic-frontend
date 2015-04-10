import React from 'react';
import HistoryButtons from './HistoryButtons.jsx';
import AuthenticateButton from './AuthenticateButton.jsx';
import ModeButtons from './ModeButtons.jsx';
import LevelPanel from './levelPanel/LevelPanel.jsx';
import DebugState from '../debugState/DebugState.jsx';

class ControlPanel extends React.Component {

  render() {
    let appState = this.props.appState;
    let { user, mode, history, viewModel } = appState;
    return (
      <section className="controlPanel">
        <DebugState appState={ appState } />
        <div>
          <LevelPanel viewModel={ viewModel }/>
          <ModeButtons mode={ mode }/>
        </div>
        <div>
          <HistoryButtons isEarliest={ history.isEarliest } isLatest={ history.isLatest }/>
          <AuthenticateButton  user={ user }/>
        </div>
      </section>
    )
  }
};

ControlPanel.propTypes = {
  appState: React.PropTypes.object.isRequired,
}

export default ControlPanel;
