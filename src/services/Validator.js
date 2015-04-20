import R from 'ramda';

class Validator {

  constructor(schema){
    this.schema = schema;
  }

  _validate(instance, prop){
    let requirements = this.schema[prop];

    if(R.has('required', requirements)){
      return !instance[prop] && `${prop} is not set`;
    }

    if(R.has('minLength', requirements)){
      let min = requirements['minLength'];
      let charLength = instance[prop] && instance[prop].length;
      return charLength < min && `${prop} has too few characters`;
    }

    if(R.has('maxLength', requirements)){
      let max = requirements['maxLength'];
      let charLength = instance[prop] && instance[prop].length;
      return charLength > max && `${prop} has too many characters`;
    }

    if(R.has('minWordLength', requirements)){
      let min = requirements['minWordLength'];
      let wordLength = instance[prop] && instance[prop].split(' ').length;
      return wordLength < 2 && `${prop} has too few words`;
    }

    if(R.has('maxWordLength', requirements)){
      let max = requirements['maxWordLength'];
      let wordLength = instance[prop] && instance[prop].split(' ').length;
      return wordLength > max && `${prop} has too many words`;
    }

  }

  validate(instance){
    let props = R.keys(this.schema);
    let results = R.map((prop) => this._validate(instance, prop), props);
    let errors  = R.filter((result) => result, results);
    let valid   = errors.length === 0;
    return { valid, errors };
  }
}

export default Validator;
