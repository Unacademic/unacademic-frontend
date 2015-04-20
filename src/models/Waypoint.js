import _ from 'lodash';
import R from 'ramda';

class Waypoint {

  constructor(data){
    _.extend(this, data);
  }

  get props(){
    return [
      'id', 
      'title', 
      'curator', 
      'summary', 
      'description', 
      'checkpoints'
    ];
  }

  get valid(){
    return this.validate().valid;
  }

  get errors(){
    return this.validate().errors;
  }

  validateId(){
    let omitted = !this.id && "the id is not set";
    return omitted;
  }

  validateTitle(){
    let length   = this.title && this.title.split(' ').length;
    let omitted  = !this.title && 'title is not set';
    let tooShort = length < 2 && 'title is too short';
    let tooLong  = length > 8 && 'title is too long';
    return omitted || tooShort || tooLong;
  }

  validateCurator(){
    let length   = this.curator && this.curator.length;
    let omitted  = !this.curator && 'curator is not set';
    let tooShort = length < 4 && "curator id is too short";
    return omitted || tooShort;;
  }

  validateSummary(){
    let omitted = !this.summary && "summary is not set"
    return omitted; 
  }

  validateDescription(){
    let omitted = !this.description && "description is not set"
    return omitted; 
  }

  validateCheckpoints(){
    let valid   = this.checkpoints && this.checkpoints.length > 0;
    let omitted = !valid && 'checkpoints are not set';
    return omitted; 
  }

  validate(){
    let results = R.map((prop) => this[`validate${_.capitalize(prop)}`](), this.props);
    let errors  = R.filter((result) => result, results);
    let valid   = errors.length === 0;
    return { valid, errors };

  }
}

export default Waypoint;
