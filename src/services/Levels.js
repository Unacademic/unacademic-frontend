import R from 'ramda';
import { Map, Stack }  from 'immutable';

class Levels {

  constructor(levels = ['resource', 'checkpoint', 'waypoint', 'waypoints']){
    this.levels = levels;
  }

  set({ current, selection }){
    let { type, id, title } = selection;
    let proposal;

    switch(type){
      case 'waypoints':
        proposal = {
          waypoints: { id, title } || current['waypoints'],
          waypoint: false,
          checkpoint: false,
          resource: false
        }
        break;
      case 'waypoint':
        proposal = {
          waypoints: current['waypoints'],
          waypoint: { id, title } || current['waypoint'],
          checkpoint: false,
          resource: false
        }
        break;
      case 'checkpoint':
        proposal = {
          waypoints: current['waypoints'],
          waypoint: current['waypoint'],
          checkpoint: { id, title } || current['checkpoint'],
          resource: false
        }
        break;
      case 'resource':
        proposal = {
          waypoints: current['waypoints'],
          waypoint: current['waypoint'],
          checkpoint: current['checkpoint'],
          resource: { id, title } || current['resource']
        }
        break;
    }

    proposal.current = this._getCurrent(proposal);

    return proposal;
  }

  _getCurrent(levels){
    let levelPairs = R.toPairs(levels);
    let notFalse = ([key, value]) => value;
    let activeLevels = R.takeWhile(notFalse, levelPairs);
    let currentLevel = R.last(activeLevels)[0];
    return currentLevel;
  }
}

export default Levels;
