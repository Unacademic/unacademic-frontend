import axios from 'axios';
import R from 'ramda';
import _ from 'lodash';
import Waypoint from '../models/Waypoint';
import unacademic1 from '../waypoints/how_to_curate.yml';
unacademic1.id = 1;
let unacademic2 = _.clone(unacademic1);
unacademic2.id = 2;
unacademic2.title = "Hello Greg";

class API {

  constructor(baseUrl){
    this.baseUrl = baseUrl;
    this.get = this.get.bind(this);
    this.waypoints = this._getAll();
  }

  async get(levels){
    let levels = this._getLevels(levels);
    let level = this._filterLevelData(levels);
    return level;
  }

  async getResourceData(url){
    let encodedUrl = encodeURIComponent(url)
    let apiUrl = 'http://api.embed.ly/1/extract?key=5406650948f64aeb9102b9ea2cb0955c&url=' + encodedUrl;
    let response = await axios.get(apiUrl);
    return response.data;
  }

  _getAll(){
    let apiData = [unacademic1, unacademic2];

    // let url = `${this.baseUrl}/waypoints.json`;

    // try {
    //   let response = await axios.get(url);
    //   let waypointsData = R.unnest(R.map((userpoints) => R.values(userpoints), R.values(response.data)));
    //   apiData = waypointsData;
    // }

    // catch (e) {
    //   apiData = [unacademic1];
    // }

    return R.map((item) => new Waypoint(item), apiData);
  }

  updateProp(data){
    let one = this._getLevels(data);
    let two = this._filterLevelData(one);
    two.model.complete = two.model.complete ? false : true;
  }

  _getLevels(levels){
    let waypoints = this.waypoints;
    let waypointId = levels.waypoint && levels.waypoint.id;
    let waypoint = R.find(R.propEq('id', waypointId), waypoints);
    let checkpointId = levels.checkpoint && levels.checkpoint.id;
    let checkpoint = waypoint && R.find(R.propEq('id', checkpointId), waypoint.checkpoints);
    let resourceId = levels.resource && levels.resource.id;
    let resource = checkpoint && R.find(R.propEq('id', resourceId), checkpoint.resources);
    return { waypoints, waypoint, checkpoint, resource };
  }

  _filterLevelData(levels){
    let levelNames = ['resource', 'checkpoint', 'waypoint', 'waypoints'];

    let levelData = R.map((type) => {
      return levels[type] && { type, model: levels[type] }
    }, levelNames);

    return R.reject(R.isNil, levelData)[0];
  }

}

export default API;
