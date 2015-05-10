import { Map }  from 'immutable';
import APIService from '../services/API.js';

let baseUrl = 'http://188.166.97.196/api/0';
let API = new APIService(baseUrl).getWaypoints;


let levels = Map({
  waypoints: 'all',
  waypoint: false,
  checkpoint: false,
  resource: false
});

let modes = Map({
  learn: 'active',
  curate: ''
})

let initialState = Map({
  timestamp: Date.now(),
  user: undefined,
  modes,
  levels
});

import TimeMachineService from '../services/TimeMachine.js';
import ViewModelService from '../services/ViewModel.js';
import AppStore from './AppState.js';

let TimeMachine = new TimeMachineService(initialState);
let ViewModel = new ViewModelService(API);

export default new AppStore(TimeMachine, ViewModel);
