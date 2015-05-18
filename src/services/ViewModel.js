import { Map, Stack }  from 'immutable';
import R from 'ramda';
import axios from 'axios';

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
