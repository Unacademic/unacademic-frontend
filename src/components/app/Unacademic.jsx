import React from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Main from '../main/Main.jsx';

class Unacademic extends React.Component{
  render() {
    let { appState, viewModel } = this.props;
    let { model, collection } = viewModel;

    return (
      <section className='layout-app'>
        <Sidebar model={ model } appState={ appState }/>
        <Main view={ appState.viewModel } collection={ collection }/>
      </section>
    )
  }
};

Unacademic.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
}

export default Unacademic;
