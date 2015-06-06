/*eslint new-cap:0 */
import { Map, Stack } from "immutable";

let _History;
let _Future;

class TimeMachine {
  constructor(initialState){
    this.initialState = Map(initialState);
    this.initializeHistory(initialState);
  }

  get _current(){
    return _History.first();
  }

  get(){
    return this.decorateState(this._current);
  }

  decorateState(state){
    let isLatest = _Future.size < 1 ? true : false;
    let isEarliest = _History.size <= 1 ? true : false;
    let historyState = Map({ isEarliest, isLatest });
    return state.set("history", historyState);
  }

  initializeHistory(){
    _History = Stack([this.initialState]);
    _Future = Stack([]);
  }

  update(props){
    props.timestamp = Date.now();
    let newState = this._current.mergeDeep(props);
    _History = _History.push(newState);
    _Future = Stack([]);
    return true;
  }

  revertHistory(){
    if(_History.size > 1){
      _Future = _Future.push(this._current);
      _History = _History.shift();
      return true;
    }
    return false;
  }

  forwardHistory(){
    if(_Future.size > 0){
      let lastState = _Future.first();
      _History = _History.push(lastState);
      _Future = _Future.shift();
      return true;
    }
    return false;
  }
}

export default TimeMachine;
