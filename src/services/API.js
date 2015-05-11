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
    this.getWaypoints = this.getWaypoints.bind(this);
    this.waypoints = [];
  }

  async _getAll(){
    let apiData = [unacademic1, unacademic2];
    return R.map((item) => new Waypoint(item), apiData);
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

  async get(levels){
    this.waypoints = await this._getAll();
    let levels = this._getLevels(levels);
    let level = this._filterLevelData(levels);
    return level;
  }

  async getWaypoints(){
    let data = [unacademic1, unacademic2];

    // try {
    //   let response = await axios.get(this.baseUrl + '/waypoints');
    //   data = response.data;
    // }

    // catch (e) {
    //   data = [];
    // }

    let waypoints = R.map((item) => new Waypoint(item), data);
    return waypoints;
  }
}

export default API;
