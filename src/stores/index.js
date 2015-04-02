let initialState = {
  timestamp: Date.now(),
  user: undefined,
  mode: 'browse',
};

import TimeMachineService from '../services/TimeMachine.js';
import AppStateStore from './AppState';
import ModelStore from './collection';

let TimeMachine = new TimeMachineService(initialState);
let AppState = new AppStateStore(TimeMachine);
let Model = new ModelStore();

export { AppState, Model };
