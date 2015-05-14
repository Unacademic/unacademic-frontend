import { Map, Stack }  from 'immutable';
import R from 'ramda';

class ViewModel {

  constructor(API){
    this.API = API;
  }

  async get(appState){
    let { user, levels } = appState;
    let { type, model } = await this.API.get(levels);
    let viewModel;

    switch(type){
      case 'resource':
        viewModel = {
          model: model,
          url: model.url
        }
        break;
      case 'checkpoint':
        viewModel = {
          model: model,
          collection: model.resources
        }
        break;
      case 'waypoint':
        viewModel = {
          model: model,
          collection: model.checkpoints
        }
        break;
      case 'waypoints':
        viewModel = { collection: model };
        break;
    }

    return viewModel;
  }

  update(propData){
    console.log(propData);
  }
}

export default ViewModel;
