import faker from 'faker';
import R from 'ramda';
import Actions from '../actions/server.js'

class Waypoint {
  constructor(index) {
    this.id = index;
    this.title = getRandomString(1,3);
    this.image = faker.image.image();
    this.curator = 'Yeehaa';
    this.summary = faker.lorem.sentence();
    this.description = R.map(faker.lorem.paragraph, getRandomRange(1,3));
    this.checkpoints = R.map(R.partial(getRandomString, 1, 3), getRandomRange(2,8));
  };
};

let allWaypoints = allWaypoints || R.map((i) => new Waypoint(i), R.range(1,10));
let userWaypoints = userWaypoints || R.map((i) => new Waypoint(i), R.range(1,10));
let collection = [];

function getRandomString(min, max){
  return faker.lorem.words(getRandomInt(min,max)).join(' ')
}

function getRandomRange(min, max){
  return R.range(min, getRandomInt(min + 1, max + 1));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  getCollection({user, mode}){
    collection = user ? userWaypoints : allWaypoints;
    Actions.loadedCollection(collection);
  }
}

