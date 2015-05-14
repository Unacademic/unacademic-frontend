import ContentPanel from '../contentPanel/ContentPanel.jsx';
import ControlPanel from '../controlPanel/ControlPanel.jsx';
import Logo from '../logo/Logo.jsx';
import DebugState from '../debugState/DebugState.jsx';
import LevelStack from '../levelStack/LevelStack.jsx';

import React from 'react';

class Sidebar extends React.Component {

  render() {
    let { model, appState } = this.props;
    let { modes, levels } = appState;

    return (
    <section className="layout-sidebar">
        <section className="sidebar">
          <div>
            <Logo modes={ modes }/>
            { model && <ContentPanel appState={ appState } model={ model }/> }
          </div>
          <DebugState appState={ appState } />
          <ControlPanel appState={ appState }/>
        </section>
      </section>
    )
  }
};

Sidebar.propTypes = {
  appState: React.PropTypes.object.isRequired,
  model: React.PropTypes.object
}

export default Sidebar;
