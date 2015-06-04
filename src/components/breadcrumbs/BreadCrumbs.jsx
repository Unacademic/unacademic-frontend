import React from "react";
import classnames from "classnames";
import R from "ramda";

import BreadCrumb from "./BreadCrumb.jsx";

class BreadCrumbs extends React.Component {

  constructor(props){
    super(props);
    this.name = "breadcrumbs";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let levelData = this.props.levels;
    let current = levelData.current;
    let levels = R.filter(([key, value]) => key !== "current" && value, R.toPairs(levelData));

    let breadcrumbs = R.map((level) => {
      return <BreadCrumb key={ level } level={ level } current={ current }/>;
    }, levels);

    return (
      <nav className={ this.classes() }>
       <ul>
         { breadcrumbs }
       </ul>
      </nav>
    );
  };
}

BreadCrumbs.propTypes = {
  levels: React.PropTypes.object.isRequired
};

export default BreadCrumbs;
