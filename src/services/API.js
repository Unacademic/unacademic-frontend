import axios from 'axios';
import R from 'ramda';
import Waypoint from '../models/Waypoint';
import unacademic from '../waypoints/how_to_curate.yml';
unacademic.id = 1;

class API {

  constructor(baseUrl){
    this.baseUrl = baseUrl; 
    this.getWaypoints = this.getWaypoints.bind(this);
  }

  async getWaypoints(){
    let data = [unacademic];

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
