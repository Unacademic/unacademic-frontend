import ContentPanel from '../contentPanel/ContentPanel.jsx';
import ControlPanel from '../controlPanel/ControlPanel.jsx';
import Logo from '../logo/Logo.jsx';
import DebugState from '../debugState/DebugState.jsx';

import React from 'react';

class Sidebar extends React.Component {

  render() {

    let { model, appState } = this.props;
    let { modes } = appState;
    let type = model.constructor.name.toLowerCase();

    return (
      <section className="layout-sidebar">
        <div>
          <Logo modes={ modes }/>
          <ContentPanel model={ model }/>
        </div>
        <DebugState appState={ appState } />
        <ControlPanel appState={ appState }/>
      </section>
    )
  }
};

Sidebar.propTypes = {
  appState: React.PropTypes.object.isRequired,
  model: React.PropTypes.object
}

export default Sidebar;
