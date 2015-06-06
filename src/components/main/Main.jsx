import React from "react";

import BreadCrumbs from "../breadcrumbs/BreadCrumbs.jsx";
import LoginButton from "../authentication/LoginButton.jsx";
import Cards from "../cards/Cards.jsx";
import Viewer from "../viewer/Viewer.jsx";

class Main extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    let { appState, viewModel } = this.props;
    let { levels, user } = appState;
    let { collection, data } = viewModel;

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
    );
  }
}

Main.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
};

export default Main;
