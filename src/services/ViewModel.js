import { Map, Stack }  from 'immutable';
import { allWaypoints } from '../utils/WaypointsFactory';

class ViewModel {
  async get(appState){
    let { user, viewModel } = appState;
    let { waypoints, waypoint } = viewModel;

    let model;
    let collection;

    if(waypoint){
      let { title, checkpoints } = allWaypoints[viewModel.waypoint - 1];
      model = { title }
      collection = checkpoints;
    } else {
      if(!user){
        collection = allWaypoints;
      } else {
        collection = [allWaypoints[1], allWaypoints[2]]
      }
    }
    console.log(model, collection);
    return { model, collection }
  }
}

export default ViewModel;
