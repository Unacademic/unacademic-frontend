import { Map, Stack }  from 'immutable';
import R from 'ramda';

class ViewModel {

  constructor(API){
    this.API = API;
  }

  async get(appState){
    let { user, levels } = appState;
    let { type, model } = await this.API.get(levels);

    if(type === 'resource'){
      return {
        model: model,
        url: model.url
      }
    }

    if(type === 'checkpoint'){
      return {
        model: model,
        collection: model.resources
      }
    }

    if(type === ' waypoint'){
      return {
        model: model,
        collection: model.checkpoints
      }
    }

    if(type === 'waypoints'){
      let waypoints = model;
      let title = '_Unacademic';
      let meta = { title, type };
      let collection = user ? [waypoints[1], waypoints[2]] : waypoints;
      return { model: meta, collection }
    }
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
