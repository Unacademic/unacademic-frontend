import 'normalize.css/normalize.css';
import css from './app.css';

import React from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Main from '../main/Main.jsx';

class Unacademic extends React.Component{

  render() {
    let { model, appState } = this.props;
    return (
      <section className="app">
        <Sidebar appState={ appState }/>
        <Main model={ model }/>
      </section>
    )
  }
};

Unacademic.propTypes = {
  model: React.PropTypes.object.isRequired,
  appState: React.PropTypes.object.isRequired
}

export default Unacademic;
