import BaseStore from './BaseStore';
import AppStateConstants from '../constants/AppStateConstants';

// MOVE TO SERVICE

import { allWaypoints, userWaypoints } from '../utils/WaypointsFactory';

function setViewModel(appState){
  let { viewModel, user } = appState;

  if(!viewModel && !user){
    return {
      level: 'waypoints',
      collection: allWaypoints 
    }
  }

  if(!viewModel){
    return {
      level: 'waypoints',
      collection: userWaypoints 
    }
  }

}

class AppStore extends BaseStore {

  constructor(TimeMachine){
    this.TimeMachine = TimeMachine;
    super();
  }

  get current() {
    let appState = this.TimeMachine.current.toJS();
    let viewModel = setViewModel(appState);
    return { appState, viewModel };
  }

  authenticate(){
    this.update({ user: 'yeehaa' })
  }

  browseModel(selection){
    console.log(selection);
    viewModel = selection;
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

export default AppStore;
