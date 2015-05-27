import React from 'react';
import classnames from 'classnames';

import Sidebar from '../sidebar/Sidebar.jsx';
import Main from '../main/Main.jsx';
import Actions from '../../actions/index';
import Start from '../start/Start.jsx';

class Unacademic extends React.Component{

  constructor(props){
    super(props);
    this.name = 'app';
  }

  handleClick(selection){
    let selection = { id: 'all', type: 'waypoints' };
    Actions.setLevel(selection);
  }

  classes(){
    let { levels, modes } = this.props.appState;
    let levelClass = `${this.name}-is-${levels.current}`;
    let modeClass = `${this.name}-is-${modes.current}`;

    return classnames({
      [this.name]: true,
      [levelClass]: levels.current,
      [modeClass]: modes.current
    });
  }

  render() {
    let { appState, viewModel } = this.props;
    let { levels, modes, user } = appState;
    let { model, collection, data } = viewModel;
    let level = levels.current;

    return (
      <section className={ this.classes() }>
        <section className="layout-sidebar layout-sidebar-left">
          <Sidebar model={ model } appState={ appState }/>
        </section>
        { level === 'introduction' && <Start/> }
        { level !== 'introduction' && <Main {...this.props}/> }
      </section>
    )
  }
};

Unacademic.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
}

export default Unacademic;