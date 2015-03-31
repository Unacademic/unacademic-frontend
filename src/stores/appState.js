import BaseStore from './BaseStore';
import TimeMachineService from '../services/TimeMachine.js';
import AppStateConstants from '../constants/AppStateConstants'

let _History;
let _Future;

let initialState = {
  timestamp: Date.now(),
  user: undefined,
  mode: 'browse',
};

class AppState extends BaseStore {

  constructor(){
    this.TimeMachine = new TimeMachineService(initialState);
    super();
  }

  get current() {
    return this.TimeMachine.current.toJS();
  }


  authenticate(){
    this.update({ user: 'yeehaa' })
  }

  switchMode(mode){
    this.update({ mode: mode });
  }

  revertHistory(){
    let change = this.TimeMachine.revertHistory();
    return change ? this.emitChange() : null;
  }

  forwardHistory(){
    let change = this.TimeMachine.forwardHistory();
    return change ? this.emitChange() : null;
  }

  update(props){
    let change = this.TimeMachine.update(props);
    return change ? this.emitChange() : null;
  }

  handleAction(action){
    switch(action.actionType) {
      case AppStateConstants.AUTHENTICATE:
        this.authenticate();
        break;
      case AppStateConstants.SWITCH_MODE:
        this.switchMode(action.mode);
        break;
      case AppStateConstants.REVERT_HISTORY:
        this.revertHistory();
        break;
      case AppStateConstants.FORWARD_HISTORY:
        this.forwardHistory();
        break;
    }
    return true;
  }
}


export default AppState;
