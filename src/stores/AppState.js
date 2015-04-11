import BaseStore from './BaseStore';
import AppStateConstants from '../constants/AppStateConstants';

class AppStore extends BaseStore {

  constructor(TimeMachine, ViewModel){
    this.TimeMachine = TimeMachine;
    this.ViewModel = ViewModel;
    super();
  }

  _get(){
    return this.TimeMachine.get().toJS();
  }

  async get() {
    let appState = this._get();
    let viewModel = await this.ViewModel.get(appState);
    return { appState, viewModel };
  }

  authenticate(){
    let viewModel = { waypoints: 'user' }
    this.update({ user: 'yeehaa', viewModel });
  }

  setViewModel(selection){
    let current = this._get().viewModel;
    let viewModel = this.ViewModel.set({ current, selection });
    this.update({ viewModel });
  }

  switchMode(mode){
    let modes = {
      browse: 'disabled',
      learn: 'disabled',
      curate: 'disabled'
    };
    modes[mode] = 'active'
    this.update({ modes })
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
      case AppStateConstants.SET_VIEW_MODEL:
        this.setViewModel(action.selection);
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
