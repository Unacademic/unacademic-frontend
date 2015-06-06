import React from "react";
import Actions from "../../actions/index";
import classnames from "classnames";

class BreadCrumb extends React.Component {

  constructor(props){
    super(props);
    this.name = "breadcrumb";
  }

  handleClick(selection){
    Actions.setLevel(selection);
  }

  classes(){
    let { level, current } = this.props;
    let [ type ] = level;
    let isActive = type === current;
    let activeClass = `${this.name}-is-active`;

    return classnames({
      [this.name]: true,
      [activeClass]: isActive
    });
  }

  render() {
    let { level } = this.props;
    let [ type, {id, title} ] = level;
    let selection = { type, id, title };
    return (
      <li onClick={ this.handleClick.bind(this, selection) } className={ this.classes() }>
        { title || "Home" }
      </li>
    );
  };
}

BreadCrumb.propTypes = {
  level: React.PropTypes.array,
  currentMode: React.PropTypes.string
};

export default BreadCrumb;
