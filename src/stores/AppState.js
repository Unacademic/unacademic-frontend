import R from 'ramda';
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
    appState.modes.current = this.getMode(appState.modes);
    appState.levels.current = this.getLevel(appState.levels);
    return { appState, viewModel };
  }

  authenticate(){
    let viewModel = { waypoints: 'user' }
    this.update({ user: 'yeehaa', viewModel });
  }

  getLevel(viewModel){
    let levels = R.toPairs(viewModel);
    let currentLevels = R.filter(([key, value]) => key && value, levels);
    return currentLevels[currentLevels.length - 1][0];
  }

  getMode(modes){
    let modesArray = R.toPairs(modes);
    let currentMode = R.filter((mode) => mode[1] === 'active', modesArray)[0][0];
    return currentMode;
  }

  setViewModel(selection){
    let current = this._get().levels;
    let levels = this.ViewModel.set({ current, selection });
    this.update({ levels });
  }

  switchMode(mode){
    let modes = {
      learn: '',
      curate: ''
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
