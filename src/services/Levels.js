import R from "ramda";

class Levels {

  constructor(levels = ["resource", "checkpoint", "waypoint", "waypoints"]){
    this.levels = levels;
  }

  _lowerLevel(type){
    switch(type){
      case "waypoints": return "waypoint";
      case "waypoint": return "checkpoint";
      case "checkpoint": return "resource";
    }
  }

  set({ current, selection }){
    let { type, id, parentId } = selection;
    let proposal;

    if(parentId){
      type = this._lowerLevel(type);
    }

    switch(type){
      case "waypoints":
        proposal = {
          waypoints: { id } || current.get("waypoints"),
          feedback: false,
          waypoint: false,
          checkpoint: false,
          resource: false
        };
        break;
      case "feedback":
        proposal = {
          waypoints: current.get("waypoints"),
          feedback: { id: 1 },
          waypoint: false,
          checkpoint: false,
          resource: false
        };
        break;
      case "waypoint":
        proposal = {
          waypoints: current.get("waypoints"),
          waypoint: { id } || current.get("waypoint"),
          checkpoint: false,
          resource: false
        };
        break;
      case "checkpoint":
        let waypointId = parentId ? { id: parentId } : undefined;
        proposal = {
          waypoints: current.get("waypoints"),
          waypoint: waypointId || current.get("waypoint"),
          checkpoint: { id } || current.get("checkpoint"),
          resource: false
        };
        break;
      case "resource":
        let checkpointId = parentId ? { id: parentId } : undefined;
        proposal = {
          waypoints: current.get("waypoints"),
          waypoint: current.get("waypoint"),
          checkpoint: checkpointId || current.get("checkpoint"),
          resource: { id } || current.get("resource")
        };
        break;
    }
    proposal.current = this._getCurrent(proposal);
    return proposal;
  }

  _getCurrent(levels){
    let levelPairs = R.toPairs(levels);
    let notFalse = ([, value]) => value;
    let activeLevels = R.takeWhile(notFalse, levelPairs);
    let currentLevel = R.last(activeLevels)[0];
    return currentLevel;
  }
}

export default Levels;
