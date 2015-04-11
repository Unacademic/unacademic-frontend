import React from 'react';
import HistoryButtons from './HistoryButtons.jsx';
import AuthenticateButton from './AuthenticateButton.jsx';
import ModeButtons from './ModeButtons.jsx';
import LevelPanel from './levelPanel/LevelPanel.jsx';

class ControlPanel extends React.Component {

  render() {
    let appState = this.props.appState;
    let { user, modes, history, viewModel } = appState;
    return (
      <section className="panel panel-control">
        <div>
          <AuthenticateButton  user={ user }/>
          <HistoryButtons isEarliest={ history.isEarliest } isLatest={ history.isLatest }/>
        </div>
        <div>
          <LevelPanel viewModel={ viewModel }/>
          <ModeButtons modes={ modes }/>
        </div>
      </section>
    )
  }
};

ControlPanel.propTypes = {
  appState: React.PropTypes.object.isRequired,
}

export default ControlPanel;
