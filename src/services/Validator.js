import R from 'ramda';

////////////////////////////
//       OBJECTIVE
// change errors collection
// from array to object
// test: 1. obj is correct 2. one field fails  3. multiple fields fail
// leave _validate alone, place logic in map, possibly use reduce
////////////////////////////

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
    let judgements = R.mapObjIndexed((value, key) => {
      return this._validate(instance, key)
    }, this.schema);
    let errors = R.pickBy((key, value) => key && value, judgements);
    let valid = Object.keys(errors).length === 0;
    return { valid, errors };
  }
}

export default Validator;
