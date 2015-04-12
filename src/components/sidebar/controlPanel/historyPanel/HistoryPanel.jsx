import React from 'react';
import Actions from '../../../../actions/index';

class HistoryPanel extends React.Component {

  revertHistory(){
    Actions.revertHistory();
  }

  forwardHistory(){
    Actions.forwardHistory();
  }

  render() {
    let { isEarliest, isLatest } = this.props;
    return (
      <div className="panel panel-history panel-horizontal">
        <button className="btn" ref="revertHistory" disabled={ isEarliest } onClick={ this.revertHistory }>Back</button>
        <button className="btn" ref="forwardHistory" disabled={ isLatest } onClick={ this.forwardHistory }>Forward</button>
      </div>
    )
  }
}

HistoryPanel.propTypes = {
  isEarliest: React.PropTypes.bool,
  isLatest: React.PropTypes.bool
}

export default HistoryPanel;
