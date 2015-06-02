import React from 'react';
import Tour from './Tour.jsx';

import tourWaypoints from './tourData/tourWaypoints.yml';
import tourWaypoint from './tourData/tourWaypoint.yml';
import tourCheckpoint from './tourData/tourCheckpoint.yml';
import tourResource from './tourData/tourResource.yml';

class TourSelector extends React.Component{
  render() {
  	switch(this.props.appState.levels.current){
      case 'waypoints':
        return <Tour key="1" tour={ tourWaypoints }/>
      case 'waypoint':
        return <Tour key="2" tour={ tourWaypoint }/>
      case 'checkpoint':
        return <Tour key="3" tour={ tourCheckpoint }/>
      case 'resource':
        return <Tour key="4" tour={ tourResourse }/>
      default:
        return <div></div>
    }
  }
}

export default TourSelector;
