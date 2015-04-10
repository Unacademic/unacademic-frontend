import './sidebar.css';
import ContentPanel from './ContentPanel.jsx';
import ControlPanel from './controlPanel/ControlPanel.jsx';

import React from 'react';

class Sidebar extends React.Component {

  render() {

    let { model, appState } = this.props;

    return (
      <div className="sidebar">
        <ContentPanel model={ model }/>
        <ControlPanel appState={ appState }/>
      </div>
    )
  }
};

Sidebar.propTypes = {
  appState: React.PropTypes.object.isRequired,
  model: React.PropTypes.object
}

export default Sidebar;
