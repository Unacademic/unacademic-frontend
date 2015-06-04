import Validator from "../services/Validator";
import _ from "lodash";

class BaseModel {
  constructor(data){
    _.extend(this, data);
    this.validator = new Validator(this.schema);
    this.validate = () => this.validator.validate(this);
  }

  get valid(){
    return this.validate().valid;
  }

  get errors(){
    return this.validate().errors;
  }
}

export default BaseModel;
