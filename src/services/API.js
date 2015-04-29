import axios from 'axios';

class API {

  constructor(baseUrl = 'http://189.166.97.196/api/0'){
    this.baseUrl = baseUrl; 
  }

  async getWaypoints(){
    let response = await axios.get(this.baseUrl + '/waypoints');
    return response.data;
  }
}

export default API;
