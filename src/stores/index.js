let initialState = {
  timestamp: Date.now(),
  user: undefined,
  mode: 'browse',
};

import TimeMachineService from '../services/TimeMachine.js';
import AppStore from './AppState.js';

let TimeMachine = new TimeMachineService(initialState);

export default new AppStore(TimeMachine);
