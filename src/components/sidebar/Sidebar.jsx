import React from "react";
import classnames from "classnames";
import Logo from "offcourse-component-logo";
import ContentPanel from "../contentPanel/ContentPanel.jsx";
import Actions from "../../actions/index.js";

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.name = "sidebar";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  toggleMode(){
    Actions.toggleMode();
  }

  render() {
    let { model, appState } = this.props;
    let { modes, levels } = appState;
    let level = levels.current;

    return (
      <section onDoubleClick={ this.toggleMode.bind(this) } className={ this.classes() }>
        { (level === "introduction" || level === "waypoints") && <Logo extended= { true } mode={ modes.current }/> }
        { (level !== "introduction" && level !== "waypoints") && <Logo mode={ modes.current }/> }
        { model && <ContentPanel context={ this.name } appState={ appState } model={ model }/> }
      </section>
    );
  }
}

Sidebar.propTypes = {
  appState: React.PropTypes.object.isRequired,
  model: React.PropTypes.object
};

export default Sidebar;
