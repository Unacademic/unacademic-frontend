import { Map }  from 'immutable';
import { allWaypoints } from '../utils/WaypointsFactory';

let viewModel = Map({
  waypoints: 'all',
  waypoint: false,
  checkpoint: false
});

let modes = Map({
  learn: 'active',
  curate: ''
})

let initialState = Map({
  timestamp: Date.now(),
  user: undefined,
  modes,
  viewModel
});

import TimeMachineService from '../services/TimeMachine.js';
import ViewModelService from '../services/ViewModel.js';
import AppStore from './AppState.js';

let TimeMachine = new TimeMachineService(initialState);
let ViewModel = new ViewModelService(allWaypoints);

export default new AppStore(TimeMachine, ViewModel);
