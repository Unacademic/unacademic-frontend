import { Map, Stack }  from 'immutable';
import { allWaypoints } from '../utils/WaypointsFactory';

class ViewModel {
  async get(appState){
    let { user, viewModel } = appState;
    let { waypoints, waypoint, checkpoint} = viewModel;

    if(checkpoint){
      let { title, resources } = allWaypoints[viewModel.waypoint - 1].checkpoints[checkpoint - 1];
      let type = 'checkpoint';
      let model = { type, title };
      let collection = resources;
      return { model, collection }
    }

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

  set({ current, selection }){
    let proposal;
    switch(selection){
      case 'parent':
        proposal = this._setParent(current);
        break;
      default:
        proposal = { [selection.type]: selection.id };
        proposal;
        break;
    }
    return proposal;
  }

  _setParent(current){
    let proposal = current;

    if(proposal.checkpoint){
      proposal.checkpoint = false;
      return proposal;
    }

    if(proposal.waypoint){
      proposal.waypoint = false;
      proposal.checkpoint = false;
      return proposal;
    }
  }
}

export default ViewModel;
