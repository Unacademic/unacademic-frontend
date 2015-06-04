import R from "ramda";

import BaseModel from "./BaseModel";
import Checkpoint from "./Checkpoint";

import schema from "./schemas/waypoint.yml";

let createCheckpoints = R.mapIndexed((checkpoint, index) => new Checkpoint(checkpoint, index + 1));

class Waypoint extends BaseModel {

  constructor(data, index){
    super(data);
    this.id = data.id || index;
    this.checkpoints = createCheckpoints(this.checkpoints);
  }

  get schema(){
    return schema;
  }
}


export default Waypoint;
