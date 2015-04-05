import css from './app.css';

import React from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Main from '../main/Main.jsx';

class Unacademic extends React.Component{

  render() {
    let { appState, viewModel } = this.props;
    let collection = viewModel.collection || [];
    return (
      <section className='app'>
        <Sidebar appState={ appState }/>
        <Main collection={ collection }/>
      </section>
    )
  }
};

Unacademic.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
}

export default Unacademic;
