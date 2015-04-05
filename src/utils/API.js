import Actions from '../actions/server.js'
import { allWaypoints, userWaypoints } from './WaypointsFactory.js';
import { AppState } from '../stores/index'

let collection = [];

export default {
  getViewModel(appState){
    console.log(appState);
    let { user, mode } = appState;
    collection = user ? userWaypoints : allWaypoints;
    Actions.loadedCollection(collection);
  }
}
