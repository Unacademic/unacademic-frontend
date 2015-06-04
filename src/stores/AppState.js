import BaseStore from "./BaseStore";
import AppStateConstants from "../constants/AppStateConstants";

class AppStore extends BaseStore {

  constructor(TimeMachine, ViewModel, Levels, Modes){
    this.TimeMachine = TimeMachine;
    this.ViewModel = ViewModel;
    this.Levels = Levels;
    this.Modes = Modes;
    super();
  }

  _get(){
    return this.TimeMachine.get();
  }

  async get() {
    let state = this._get();
    let viewModel = await this.ViewModel.get(state);
    let appState = state.toJS();
    return { appState, viewModel };
  }

  authenticate(){
    let viewModel = { waypoints: "user" };
    this.update({ user: "yeehaa", viewModel });
  }

  toggleComplete(selection){
    this.ViewModel.checkDone(selection);
    this.emitChange();
  }

  setLevel(selection){
    let current = this._get().get("levels");
    let levels = this.Levels.set({ current, selection });
    return this.update({ levels });
  }

  setMode(mode){
    let modes = this.Modes.set(mode);
    this.update({ modes });
  }

  setHighlight(selection, status, context){
    this.ViewModel.setHighlight(selection, status, context);
    this.emitChange();
  }

  toggleMode(){
    let currentModes = this._get().get("modes");
    let current = currentModes.get("current");
    let modes = this.Modes.toggle(current);
    this.update({ modes });
  }

  updateModelProp(propData){
    this.ViewModel.update(propData);
    this.emitChange();
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

  updateCriteria(selection){
    let levels = this._get().get("levels").toJS();

    this.ViewModel.updateCriteria({levels, criterium: selection});
    this.emitChange();
  }

  handleAction(action){
    switch(action.actionType) {
      case AppStateConstants.AUTHENTICATE:
        this.authenticate();
        break;
      case AppStateConstants.TOGGLE_COMPLETE:
        this.toggleComplete(action.selection);
        break;
      case AppStateConstants.SET_LEVEL:
        this.setLevel(action.selection);
        break;
      case AppStateConstants.SET_MODE:
        this.setMode(action.mode);
        break;
      case AppStateConstants.TOGGLE_MODE:
        this.toggleMode();
        break;
      case AppStateConstants.REVERT_HISTORY:
        this.revertHistory();
        break;
      case AppStateConstants.FORWARD_HISTORY:
        this.forwardHistory();
        break;
      case AppStateConstants.SET_HIGHLIGHT:
        let { selection, status, context } = action;
        this.setHighlight(selection, status, context);
        break;
      case AppStateConstants.UPDATE_MODEL_PROP:
        this.updateModelProp(action.propData);
        break;
      case AppStateConstants.UPDATE_CRITERIA:
        this.updateCriteria(action.selection);
        break;
    }
    return true;
  }
}

export default AppStore;
