import React from 'react';

class BreadCrumbs extends React.Component {
  render() {
    let {  waypoints, waypoint, checkpoint } = this.props.view;
    let currentMode = checkpoint ? 'waypoint' : 'waypoints';
    return (
      <nav className="breadcrumbs">
       <ul>
         { waypoints && <li className="breadcrumb breadcrumb-is-active">WayPoints</li> }
         { waypoint && <li className="breadcrumb breadcrumb-is-active">WayPoint</li> }
         { checkpoint && <li className="breadcrumb">CheckPoint</li> }
       </ul>
      </nav>
    )
  }
}

BreadCrumbs.propTypes = {
  view: React.PropTypes.object
}

export default BreadCrumbs;
