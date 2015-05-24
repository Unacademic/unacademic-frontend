import React from 'react';
import classnames from 'classnames';

import Sidebar from '../sidebar/Sidebar.jsx';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs.jsx';
import LoginButton from '../authentication/LoginButton.jsx';
import Cards from '../cards/Cards.jsx';
import Viewer from '../viewer/Viewer.jsx';

class Unacademic extends React.Component{

  constructor(props){
    super(props);
    this.name = 'app';
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

    return (
      <section className={ this.classes() }>
        <section className="layout-sidebar layout-sidebar-left">
          <Sidebar model={ model } appState={ appState }/>
        </section>
        <section className="layout-main">
          <section className="layout-topbar">
            <BreadCrumbs levels={ levels }></BreadCrumbs>
            <LoginButton userId={ user }/>
          </section>
          <section className="layout-content">
            { collection && <Cards collection={ collection } className="cards" /> }
            { data && <Viewer data={ data } /> }
          </section>
        </section>
      </section>
    )
  }
};

Unacademic.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
}

export default Unacademic;
