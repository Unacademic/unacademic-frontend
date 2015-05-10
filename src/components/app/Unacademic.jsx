import React from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Main from '../main/Main.jsx';

class Unacademic extends React.Component{
  render() {
    let { appState, viewModel } = this.props;
    let currentLevel = appState.levels.current;
    let currentMode = appState.modes.current;
    let { model, collection, url } = viewModel;
    let classes = `layout-app layout-app-is-${currentLevel} layout-app-is-${currentMode}`;

    return (
      <section className={ classes }>
        <Sidebar model={ model } appState={ appState }/>
        <Main levels={ appState.levels } url={ url } collection={ collection }/>
      </section>
    )
  }
};

Unacademic.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
}

export default Unacademic;
