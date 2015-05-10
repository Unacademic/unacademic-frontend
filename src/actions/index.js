import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStateConstants from '../constants/AppStateConstants'
import API from '../utils/API';

let Actions = {
  authenticate(){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.AUTHENTICATE
    });
  },
  updateProp(propData){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.UPDATE_PROP,
      propData: propData
    });
  },
  setViewModel(selection){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.SET_VIEW_MODEL,
      selection: selection
    });
  },
  switchMode(mode){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.SWITCH_MODE,
      mode: mode
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
