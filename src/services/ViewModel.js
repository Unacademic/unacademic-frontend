import { Map, Stack }  from 'immutable';
import { allWaypoints } from '../utils/WaypointsFactory';

class ViewModel {
  async get(appState){
    let { user, viewModel } = appState;
    let { waypoints, waypoint, checkpoint} = viewModel;

    if(checkpoint){
      let model = allWaypoints[viewModel.waypoint - 1].checkpoints[checkpoint - 1];
      let collection = model.resources;
      return { model, collection }
    }

    if(waypoint){
      let model = allWaypoints[viewModel.waypoint - 1];
      let collection = model.checkpoints;
      return { model, collection }
    }

    if(waypoints){
      let title = '_Unacademic';
      let type = 'waypoints';
      let model = { title, type };
      let collection = user ? [allWaypoints[1], allWaypoints[2]] : allWaypoints;
      return { model, collection }
    }
  }

  set({ current, selection }){
    let { type, id } = selection;
    let proposal;

    switch(type){
      case 'waypoints':
        proposal = {
          waypoints: id || current['waypoints'],
          waypoint: false,
          checkpoint: false
        }
        break;
      case 'waypoint':
        proposal = {
          waypoints: current['waypoints'],
          waypoint: id || current['waypoint'],
          checkpoint: false
        }
        break;
      case 'checkpoint':
        proposal = {
          waypoints: current['waypoints'],
          waypoint: current['waypoint'],
          checkpoint: id || current['checkpoint']
        }
        break;
    }

    return proposal;
  }
}

export default ViewModel;
