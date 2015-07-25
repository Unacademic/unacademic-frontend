import React from "react";
import BreadCrumbs from "offcourse-component-breadcrumbs";
import LevelButton from "offcourse-component-level-button";
import Cards from "../cards/Cards.jsx";
import Viewer from "../viewer/Viewer.jsx";

// Just for temporary testing purposes...
import Actions from "../../actions/index";

class Main extends React.Component{

  constructor(props){
    super(props);
  }

  setLevel(selection){
    Actions.setLevel(selection);
  }

  render() {
    let { appState, viewModel } = this.props;
    let { levels, user } = appState;
    let { collection, data } = viewModel;

    return (
      <div>
        <section className="layout-topbar">
          <BreadCrumbs setLevel={ this.setLevel.bind(this) }
            levels={ levels }/>
          <LevelButton setLevel={ this.setLevel.bind(this) }
            level={ { title: "Feedback", type: "feedback" } }
            current={ levels.current === "feedback" }/>
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
