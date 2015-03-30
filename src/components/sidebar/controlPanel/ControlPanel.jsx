import React from 'react';
import HistoryButtons from './HistoryButtons.jsx';
import AuthenticateButton from './AuthenticateButton.jsx';
import ModeButtons from './ModeButtons.jsx';

class ControlPanel extends React.Component {

  render() {
    let { user, mode, history } = this.props.appState;
    return (
      <section className="controlPanel">
        <HistoryButtons isEarliest={ history.isEarliest } isLatest={ history.isLatest }/>
        { user ? <ModeButtons mode={ mode }/> : <AuthenticateButton /> }
      </section>
    )
  }
};

ControlPanel.propTypes = {
  appState: React.PropTypes.object.isRequired,
}

export default ControlPanel;
