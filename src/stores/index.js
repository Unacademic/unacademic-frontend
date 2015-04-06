let initialState = {
  timestamp: Date.now(),
  user: undefined,
  mode: 'browse',
};

import TimeMachineService from '../services/TimeMachine.js';
import ViewModelService from '../services/ViewModel.js';
import AppStore from './AppState.js';

let TimeMachine = new TimeMachineService(initialState);
let ViewModel = new ViewModelService();

export default new AppStore(TimeMachine, ViewModel);
