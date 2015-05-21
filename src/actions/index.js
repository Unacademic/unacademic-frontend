import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStateConstants from '../constants/AppStateConstants'
import API from '../utils/API';

let Actions = {
  authenticate(){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.AUTHENTICATE
    });
  },
  toggleComplete(selection){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.TOGGLE_COMPLETE,
      selection: selection
    });
  },
  setHighlight(selection, status){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.SET_HIGHLIGHT,
      selection: selection,
      status: status
    });
  },
  updateModelProp(propData){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.UPDATE_PROP,
      propData: propData
    });
  },
  setLevel(selection){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.SET_LEVEL,
      selection: selection
    });
  },
  setMode(mode){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.SET_MODE,
      mode: mode
    });
  },
  toggleMode(mode){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.TOGGLE_MODE
    });
  },
  revertHistory(){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.REVERT_HISTORY
    });
  },
  forwardHistory(){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.FORWARD_HISTORY
    });
  }
};

export default Actions;
