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
  }
  async getAll(){
    let apiData = [unacademic1, unacademic2];
    return R.map((item) => new Waypoint(item), apiData);
  }

  async get(levels){
    let waypoints = await this.getAll();

    // ***
    let waypointId = levels.waypoint && levels.waypoint.id;
    let waypoint = R.find(R.propEq('id', waypointId), waypoints);
    let checkpointId = levels.checkpoint && levels.checkpoint.id;
    let checkpoint = waypoint && R.find(R.propEq('id', checkpointId), waypoint.checkpoints);
    // ***

    if(levels.checkpoint){
      return checkpoint;
    }

    if(levels.waypoint){
      return waypoint;
    }

    if(levels.waypoints){
      return waypoints;
    }
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
