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
          { model && <ContentPanel context="sidebar"  appState={ appState } model={ model }/> }
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

function getIntroduction(){
    return '';
  // return `
  //   Welcome,

  //   to the tool that maps the universe of knowledge.
  //   Offcourse is a simple tool, but the impact on your learning is abslotutely huge.
  //   By helping you structure your learning, giving you the space to store and share your learning and providing you with metrics about your personal learning we help you boost your applicable knowledge curve.

  //   This sidebar will be the legend to your map.
  //   Start your learning by learning about Offcourse.
  // `
}
