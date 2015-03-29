import BaseStore from './BaseStore';
import { Map, Stack }  from 'immutable';
import AppStateConstants from '../constants/AppStateConstants'

let _History;
let _Future;

let initialState = {
  timestamp: Date.now(),
  user: undefined,
  mode: 'browse',
};

class AppState extends BaseStore {

  constructor(){
    this.initialState = Map(initialState);
    this.initializeHistory(initialState);
    super();
  }

  get _current(){
    return _History.first();
  }

  get current() {
    let currentState = this._current.toJS();
    let isLatest = _Future.size < 1 ? true : false;
    let isEarliest = _History.size <= 1 ? true : false;
    currentState.history = { isLatest, isEarliest };
    return currentState;
  }

  initializeHistory(){
    _History = Stack([this.initialState])
    _Future =  Stack([]);
  }

  authenticate(){
    this.update({ user: 'yeehaa' })
  }

  switchMode(mode){
    this.update({ mode: mode });
  }

  revertHistory(){
    if(_History.size > 1){
      _Future = _Future.push(this._current);
      _History = _History.shift();
      this.emitChange();
    }
  }

  forwardHistory(){
    if(_Future.size > 0){
      let lastState = _Future.first();
      _History = _History.push(lastState);
      _Future = _Future.shift();
      this.emitChange();
    }
  }

  update(props){
    props.timestamp = Date.now();
    _History = _History.push(this._current.merge(props));
    _Future = Stack([]);
    this.emitChange();
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


export default AppState;
