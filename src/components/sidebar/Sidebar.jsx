import React from 'react';
import classnames from 'classnames';

import Logo from '../logo/Logo.jsx';
import LogoExtended from '../logo/LogoExtended.jsx';
import ContentPanel from '../contentPanel/ContentPanel.jsx';
import Actions from '../../actions/index.js';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.name = 'sidebar';
  }


  classes(){
    return classnames({
      [this.name]: true
    });
  }

  toggleMode(){
    Actions.toggleMode();
  }

  render() {
    let { model, appState } = this.props;
    let { modes, levels } = appState;
    let level = levels.current;

    return (
      <section onDoubleClick={ this.toggleMode.bind(this) } className={ this.classes() }>
        { level === 'introduction' && <LogoExtended mode={ modes.current }/> }
        { level !== 'introduction' && <Logo mode={ modes.current }/> }
        { model && <ContentPanel context={ this.name } appState={ appState } model={ model }/> }
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
