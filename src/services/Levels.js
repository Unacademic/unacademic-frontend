import { Map, Stack }  from 'immutable';

class Levels {

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
    return proposal;
  }

}

export default Levels;
