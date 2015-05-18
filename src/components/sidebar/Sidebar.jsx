import ContentPanel from '../contentPanel/ContentPanel.jsx';
import ControlPanel from '../controlPanel/ControlPanel.jsx';
import Logo from '../logo/Logo.jsx';
import DebugState from '../debugState/DebugState.jsx';
import LevelStack from '../levelStack/LevelStack.jsx';
import Actions from '../../actions/index.js';

import React from 'react';

class Sidebar extends React.Component {

  toggleMode(){
    Actions.toggleMode();
  }

  render() {
    let { model, appState } = this.props;
    let { modes, levels } = appState;

    return (
      <section onDoubleClick={ this.toggleMode.bind(this) }  className="layout-sidebar">
        <section className="sidebar">
          <Logo modes={ modes }/>
          { model && <ContentPanel appState={ appState } model={ model }/> }
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
