import { Map, Stack }  from 'immutable';
import R from 'ramda';

let current;
let oldLevels;

class ViewModel {

  constructor(API){
    this.API = API;
  }

  async get(appState){
    let user = appState.get('user');
    let levels = appState.get('levels');

    if(levels === oldLevels){
      return current;
    }

    oldLevels = levels;

    let { type, model } = await this.API.get(levels.toJS());

    switch(type){
      case 'resource':
        current = {
          model: model,
          url: model.url
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

  checkDone({parent, item}){
    let currentItem = current.collection[parent -1 ].checkpoints[item-1].complete;
    current.collection[parent - 1].checkpoints[item - 1].complete = currentItem ? false : true;
  }

  update(propData){
    console.log(propData);
  }
}

export default ViewModel;
