import R from "ramda";

import BaseModel from "./BaseModel";
import Resource from "./Resource";

import schema from "./schemas/checkpoint.yml";

let createResources = R.mapIndexed((resource, index) => new Resource(resource, index + 1));

class Checkpoint extends BaseModel {

  constructor(data, index){
    super(data);
    this.id = index;
    this.resources = createResources(this.resources);
  }

  get schema(){
    return schema;
  }
}


export default Checkpoint;
