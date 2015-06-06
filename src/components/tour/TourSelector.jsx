import React from "react";
import Tour from "./Tour.jsx";

import tourWaypoints from "./tourData/tourWaypoints.yml";
import tourWaypoint from "./tourData/tourWaypoint.yml";
import tourCheckpoint from "./tourData/tourCheckpoint.yml";
import tourResource from "./tourData/tourResource.yml";

class TourSelector extends React.Component{
  render() {
    switch(this.props.appState.levels.current){
      case "waypoints":
        return <Tour tour={ tourWaypoints }/>;
      case "waypoint":
        return <Tour tour={ tourWaypoint }/>;
      case "checkpoint":
        return <Tour tour={ tourCheckpoint }/>;
      case "resource":
        return <Tour tour={ tourResource }/>;
      default:
        return <div></div>;
    }
  }
}

export default TourSelector;
