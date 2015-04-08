import { Map }  from 'immutable';

let viewModel = Map({
  waypoints: 'all',
  waypoint: false,
  checkpoint: false
});

let initialState = Map({
  timestamp: Date.now(),
  user: undefined,
  mode: 'browse',
  viewModel
});

import TimeMachineService from '../services/TimeMachine.js';
import ViewModelService from '../services/ViewModel.js';
import AppStore from './AppState.js';

let TimeMachine = new TimeMachineService(initialState);
let ViewModel = new ViewModelService();

export default new AppStore(TimeMachine, ViewModel);
