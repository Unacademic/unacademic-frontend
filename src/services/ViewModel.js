import { Map, Stack }  from 'immutable';
import R from 'ramda';
import axios from 'axios';

let current;
let oldLevels;

class ViewModel {

  constructor(API){
    this.API = API;
  }

  async get(appState){
    let user = appState.get('user');
    let levels = appState.get('levels');
    let { type, model } = await this.API.get(levels.toJS());

    switch(type){
      case 'resource':
        let data = await this.API.getResourceData(model.url);

        current = {
          model: model,
          data: data
        }
        break;
      case 'checkpoint':
        current = {
          model: model,
          collection: model.resources
        }
        break;
      case 'waypoint':
        current = {
          model: model,
          collection: model.checkpoints
        }
        break;
      case 'waypoints':
        current = { collection: model };
        break;
    }

    return current;
  }

  checkDone({waypoint, checkpoint, resource}){
    if(!waypoint){
      waypoint = { id: current.model.id }
    }
    this.API.updateProp({waypoint, checkpoint, resource});
    return true;
  }

  updateCriteria(selection){
    this.API.updateCriteria(selection);
  }

  setHighlight({waypoint, checkpoint, resource}, status, context){
    if(context === 'card'){
      current.collection[waypoint.id - 1].checkpoints[checkpoint.id- 1].highlight = status;
    } else {
      current.collection[checkpoint.id- 1].highlight = status;
    }
  }

  update(propData){
    console.log(propData);
  }
}

export default ViewModel;
