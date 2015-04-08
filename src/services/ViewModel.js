import { Map, Stack }  from 'immutable';
import { allWaypoints } from '../utils/WaypointsFactory';

class ViewModel {
  async get(appState){
    let { user, viewModel } = appState;
    let { waypoints, waypoint } = viewModel;


    if(waypoint){
      let { title, checkpoints } = allWaypoints[viewModel.waypoint - 1];
      let type = 'waypoint';
      let model = { type, title }
      let collection = checkpoints;
      return { model, collection }
    }

    if(waypoints){
      let title = '_Unacademic';
      let type = 'waypoints';
      let model = { type, title };
      let collection;

      if(!user){
        collection = allWaypoints;
      } else {
        collection = [allWaypoints[1], allWaypoints[2]]
      }

      return { model, collection }
    }
  }
}

export default ViewModel;
