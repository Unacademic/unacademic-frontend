import './styles/app.scss';
import React from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Main from '../main/Main.jsx';

class Unacademic extends React.Component{

  render() {
    let { appState, viewModel } = this.props;
    let { model, collection } = viewModel;
    let { waypoint, checkpoint } = appState.viewModel;
    return (
      <section className='layout-app'>
        <section className="layout-levels">
          { waypoint && <div className="tab waypoints"></div> }
          { checkpoint && <div className="tab waypoint"></div> }
        </section>
        <Sidebar model={ model } appState={ appState }/>
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
