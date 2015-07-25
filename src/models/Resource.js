import BaseModel from "./BaseModel";

import schema from "./schemas/resource.yml";

class Resource extends BaseModel {

  constructor(data, index){
    super(data);
    this.id = index;
  }

  get schema(){
    return schema;
  }
}


export default Resource;
