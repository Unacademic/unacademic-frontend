import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStateConstants from '../constants/AppStateConstants'
import API from '../utils/API';

let Actions = {
  loadedCollection(collection){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.LOADED_COLLECTION,
      collection: collection
    });
  },
  getCollection({ user, mode }){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.GET_COLLECTION,
    });
    API.getCollection({ user, mode });
  },
  authenticate(){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.AUTHENTICATE
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
