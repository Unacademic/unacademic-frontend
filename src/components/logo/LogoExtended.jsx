import React from "react";
import classnames from "classnames";
import Actions from "../../actions/index";

class LogoExtended extends React.Component {
  constructor(props){
    super(props);
    this.name = "logo";
  }

  handleClick(){
    let selection = { id: "all", type: "waypoints" };
    Actions.setLevel(selection);
  }

  classes(){
    let { mode } = this.props;
    let modeClass = `${this.name}-is-${mode}`;

    return classnames({
      [this.name]: true,
      [modeClass]: mode
    });
  }

  render() {
    let { mode } = this.props;
    let title = mode === "learn" ? "Offcourse_" : "_Offcourse";

    return (
      <section className={ this.classes() }>
        <button className="textbar">{ title }</button><br/>
        <p className="textbar textbar-inverse">Learn</p><br/>
        <p className="textbar textbar-inverse">By Dwelling</p>
      </section>
    );
  }
}

LogoExtended.propTypes = {
  mode: React.PropTypes.string
};

export default LogoExtended;
