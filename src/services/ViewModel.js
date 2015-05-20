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

    if(levels === oldLevels){
      return current;
    }

    oldLevels = levels;

    let { type, model } = await this.API.get(levels.toJS());

    switch(type){
      case 'resource':
        let data = '';
        let encodedUrl = encodeURIComponent(model.url)
        let apiUrl = 'http://api.embed.ly/1/extract?key=5406650948f64aeb9102b9ea2cb0955c&url=' + encodedUrl;
        let response = await axios.get(apiUrl);
        viewModel = {
          model: model,
          url: model.url,
          data: response.data
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
