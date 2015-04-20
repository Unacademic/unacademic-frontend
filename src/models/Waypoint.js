import BaseModel from './BaseModel';
import schema from './schemas/waypoint.yml';
import R from 'ramda';

class Checkpoint {
}

let createCheckpoints = R.map((checkpoint) => new Checkpoint(Checkpoint));

class Waypoint extends BaseModel {

  constructor(data){
    super(data);
    this.checkpoints = createCheckpoints(this.checkpoints);
  }

  get schema(){
    return schema;
  }
}


export default Waypoint;
