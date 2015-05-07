import React from 'react';
import R from 'ramda';

import BreadCrumb from './BreadCrumb.jsx';

class BreadCrumbs extends React.Component {
  render() {
    let levels = R.toPairs(this.props.view);
    let currentLevels = R.filter(([key, value]) => key && value, levels);
    let currentMode = currentLevels[currentLevels.length - 1][0];

    let createBreadCrumbs = R.map((level) => {
      return <BreadCrumb key={ level } level={ level } currentMode={ currentMode }/>
    });

    let breadcrumbs = createBreadCrumbs(currentLevels);
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
  view: React.PropTypes.object
}

export default BreadCrumbs;
