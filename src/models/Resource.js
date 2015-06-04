import BaseModel from "./BaseModel";

import schema from "./schemas/resource.yml";

class Resource extends BaseModel {

  constructor(data, index){
    this.id = index;
    super(data);
  }

  get schema(){
    return schema;
  }
}


export default Resource;
