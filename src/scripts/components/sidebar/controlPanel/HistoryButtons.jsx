import React from 'react';
import Actions from '../../../actions/index';

class HistoryButtons extends React.Component {

  revertHistory(){
    Actions.revertHistory();
  }

  forwardHistory(){
    Actions.forwardHistory();
  }

  render() {
    let { isEarliest, isLatest } = this.props;
    return (
      <div className="historyButtons">
        <button disabled={ isEarliest } onClick={ this.revertHistory }>Revert History</button>
        <button disabled={ isLatest } onClick={ this.forwardHistory }>Forward History</button>
      </div>
    )
  }
}

HistoryButtons.propTypes = {
  isEarliest: React.PropTypes.bool,
  isLatest: React.PropTypes.bool
}

export default HistoryButtons;
