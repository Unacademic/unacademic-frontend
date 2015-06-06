import React from "react";
import classnames from "classnames";

import WaypointPanel from "./WaypointPanel.jsx";
import CheckpointPanel from "./CheckpointPanel.jsx";
import ResourcePanel from "./ResourcePanel.jsx";

class ContentPanel extends React.Component {

  constructor(props){
    super(props);
    this.name = "container";
  }

  classes(){
    // let extendedName = `${this.name}-content`;
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { model, appState, context } = this.props;

    let level;
    let mode;

    if(appState){
      level = appState.levels.current;
      mode = appState.modes.current;
    } else {
      let type = model.constructor.name.toLowerCase();
      level = type === "object" ? "waypoints" : type;
    }

    return (
      <div>
        { level === "waypoints" && null }
        { level === "waypoint" && <WaypointPanel context={ context } level={ level } mode={ mode } model={ model }/> }
        { level === "checkpoint" && <CheckpointPanel context={ context } model={ model }/> }
        { level === "resource" && <ResourcePanel context={ context } model={ model }/> }
      </div>
    );
  }
}

ContentPanel.propTypes = {
  model: React.PropTypes.object
};

export default ContentPanel;
