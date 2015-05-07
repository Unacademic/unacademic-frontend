import React from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Main from '../main/Main.jsx';

class Unacademic extends React.Component{
  render() {
    let { appState, viewModel } = this.props;
    let { current } = appState.modes;
    let { model, collection } = viewModel;
    let classes = `layout-app layout-app-is-${current}`;

    return (
      <section className={ classes }>
        <Sidebar model={ model } appState={ appState }/>
        <Main levels={ appState.levels } collection={ collection }/>
      </section>
    )
  }
};

Unacademic.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
}

export default Unacademic;
