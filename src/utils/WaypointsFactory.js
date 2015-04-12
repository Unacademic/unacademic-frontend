import faker from 'faker';
import R from 'ramda';
import _ from 'lodash';

class Resource {
  constructor(id){
    this.id = id;
    this.title = getRandomString(1,3);
    this.author = getRandomString(2);
    this.url = getRandomString(2);
  }

}

class Checkpoint {
  constructor(id) {
    this.id = id;
    this.title = getRandomString(1,3);
    this.description = R.map(faker.lorem.paragraph, getRandomRange(1,3));
    this.resources = R.map((i) => new Resource(i), getRandomRange(2,8));
  };
};

class Waypoint {
  constructor(index) {
    this.id = index;
    this.title = _.capitalize(getRandomString(2,5));
    this.image = faker.image.image();
    this.curator = 'Yeehaa';
    this.summary = faker.lorem.sentence();
    this.description = R.map(faker.lorem.paragraph, getRandomRange(1,3));
    this.checkpoints = R.map((i) => new Checkpoint(i), getRandomRange(1,15));
  };

};

let allWaypoints = R.map((i) => new Waypoint(i), R.range(1,10));

export { allWaypoints };

function getRandomString(min, max){
  let words = faker.lorem.words(getRandomInt(min,max));
  let capitalizeAll = R.map((word) => _.capitalize(word));
  return capitalizeAll(words).join(' ');
}

function getRandomRange(min, max){
  return R.range(min, getRandomInt(min + 1, max + 1));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

