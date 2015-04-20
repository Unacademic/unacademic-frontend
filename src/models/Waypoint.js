import BaseModel from './BaseModel';
import schema from './schemas/waypoint.yml';

class Waypoint extends BaseModel {
  get schema(){
    return schema;
  }
}

export default Waypoint;
