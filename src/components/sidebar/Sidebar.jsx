import './sidebar.css';
import ContentPanel from './ContentPanel.jsx';
import ControlPanel from './controlPanel/ControlPanel.jsx';
import DebugState from './debugState/DebugState.jsx';

import React from 'react';

class Sidebar extends React.Component {

  render() {

    let { appState } = this.props;

    return (
      <div className="sidebar">
        <ContentPanel/>
        <DebugState appState={ appState } />
        <ControlPanel appState={ appState }/>
      </div>
    )
  }
};

Sidebar.propTypes = {
  appState: React.PropTypes.object.isRequired
}

export default Sidebar;
