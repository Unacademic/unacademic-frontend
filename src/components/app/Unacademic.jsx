import React from "react";
import classnames from "classnames";

import Sidebar from "../sidebar/Sidebar.jsx";
import Main from "../main/Main.jsx";
import Start from "../start/Start.jsx";

class Unacademic extends React.Component{

  constructor(props){
    super(props);
    this.name = "app";
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
    let { levels } = appState;
    let { model } = viewModel;
    let level = levels.current;

    return (
      <section className={ this.classes() }>
        <section className="layout-sidebar layout-sidebar-left">
          <Sidebar model={ model } appState={ appState }/>
        </section>
        <section className="layout-main">
          { level === "introduction" && <Start/> }
          { level !== "introduction" && <Main {...this.props}/> }
        </section>
      </section>
    );
  }
}

Unacademic.propTypes = {
  appState: React.PropTypes.object.isRequired,
  viewModel: React.PropTypes.object
};

export default Unacademic;
