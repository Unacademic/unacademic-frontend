import R from 'ramda';
import BaseStore from './BaseStore';
import AppStateConstants from '../constants/AppStateConstants';

class AppStore extends BaseStore {

  constructor(TimeMachine, ViewModel, Levels, Modes){
    this.TimeMachine = TimeMachine;
    this.ViewModel = ViewModel;
    this.Levels = Levels;
    this.Modes = Modes;
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

  setLevel(selection){
    let current = this._get().levels;
    let levels = this.Levels.set({ current, selection });
    this.update({ levels });
  }

  setMode(mode){
    let modes = this.Modes.set(mode);
    this.update({ modes })
  }

  updateProp(propData){
    this.ViewModel.update(propData);
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
      case AppStateConstants.SET_LEVEL:
        this.setLevel(action.selection);
        break;
      case AppStateConstants.SWITCH_MODE:
        this.setMode(action.mode);
        break;
      case AppStateConstants.REVERT_HISTORY:
        this.revertHistory();
        break;
      case AppStateConstants.FORWARD_HISTORY:
        this.forwardHistory();
        break;
      case AppStateConstants.UPDATE_PROP:
        this.updateProp(action.propData);
    }
    return true;
  }
}

export default AppStore;
