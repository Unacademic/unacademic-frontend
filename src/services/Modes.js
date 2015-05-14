import R from 'ramda';
import { Map, Stack }  from 'immutable';

class Modes {

  set(mode){
    let modes = {
      learn: '',
      curate: ''
    };
    modes[mode] = 'active';
    modes.current = mode;
    return modes;
  }
}

export default Modes;
