import BaseStore from './BaseStore';
import { Map, Stack }  from 'immutable';
import AppStateConstants from '../constants/AppStateConstants'

let collection = [];

class ModelStore extends BaseStore {

  constructor(){
    super();
  }

  get collection(){
    return collection;
  }


  handleAction(action){
    switch(action.actionType) {
      case AppStateConstants.LOADED_COLLECTION:
        collection = action.collection;
        this.emitChange();
        break;
    }
    return true;
  }
}


export default ModelStore;
