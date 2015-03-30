import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStateConstants from '../constants/AppStateConstants'

let Actions = {
  loadedCollection(collection){
    AppDispatcher.dispatch({
      actionType: AppStateConstants.LOADED_COLLECTION,
      collection: collection
    });
  }
};

export default Actions;
