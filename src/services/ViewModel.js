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
        let title = '_Unacademic';
        let meta = { title, type };
        let collection = user ? [model[1], model[2]] : model;
        viewModel = { model: meta, collection };
        break;
    }

    return viewModel;
  }

  set({ current, selection }){
    let { type, id, title } = selection;
    let proposal;

    switch(type){
      case 'waypoints':
        proposal = {
          waypoints: { id, title } || current['waypoints'],
          waypoint: false,
          checkpoint: false,
          resource: false
        }
        break;
      case 'waypoint':
        proposal = {
          waypoints: current['waypoints'],
          waypoint: { id, title } || current['waypoint'],
          checkpoint: false,
          resource: false
        }
        break;
      case 'checkpoint':
        proposal = {
          waypoints: current['waypoints'],
          waypoint: current['waypoint'],
          checkpoint: { id, title } || current['checkpoint'],
          resource: false
        }
        break;
      case 'resource':
        proposal = {
          waypoints: current['waypoints'],
          waypoint: current['waypoint'],
          checkpoint: current['checkpoint'],
          resource: { id, title } || current['resource']
        }
        break;
    }
    return proposal;
  }

  update(propData){
    console.log(propData);
  }
}

export default ViewModel;
