import { Map, Stack }  from 'immutable';
import { allWaypoints, userWaypoints } from '../utils/WaypointsFactory';

class ViewModel {
  async get(appState){
    let { user } = appState;
    let title;
    let collection;
    if(!user){
      collection = allWaypoints;
    } else {
      collection = userWaypoints;
    }
    return { title, collection } 
  }
}

export default ViewModel;
