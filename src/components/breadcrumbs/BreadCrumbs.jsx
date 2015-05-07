import React from 'react';
import R from 'ramda';

import BreadCrumb from './BreadCrumb.jsx';

class BreadCrumbs extends React.Component {
  render() {
    let levelData = this.props.levels;
    let levels = R.filter(([key, value]) => key !== 'current' && value, R.toPairs(levelData));
    let currentMode = levelData.current;

    let breadcrumbs = R.map((level) => {
      return <BreadCrumb key={ level } level={ level } currentMode={ currentMode }/>
    }, levels);

    return (
      <nav className="breadcrumbs">
       <ul>
         { breadcrumbs }
       </ul>
      </nav>
    )
  }
}

BreadCrumbs.propTypes = {
  levels: React.PropTypes.object
}

export default BreadCrumbs;
