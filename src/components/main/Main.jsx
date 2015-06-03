import React from 'react';
import classnames from 'classnames';

import BreadCrumbs from '../breadcrumbs/BreadCrumbs.jsx';
import LoginButton from '../authentication/LoginButton.jsx';
import Cards from '../cards/Cards.jsx';
import Viewer from '../viewer/Viewer.jsx';

class Main extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    let { appState, viewModel } = this.props;
    let { levels, modes, user } = appState;
    let { model, collection, data } = viewModel;
    let level = levels.current;

    return (
      <div>
        <section className="layout-topbar">
          <BreadCrumbs levels={ levels }></BreadCrumbs>
          <LoginButton userId={ user }/>
        </section>
        <section className="layout-content">
          { collection && <Cards collection={ collection } className="cards" /> }
          { data && <Viewer data={ data } /> }
        </section>
      </div>
    )
  }
};

Main.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
}

export default Main;
