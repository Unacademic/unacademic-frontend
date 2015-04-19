import faker from 'faker';
import R from 'ramda';
import _ from 'lodash';
import store_data from '../waypoints/store_data.yml';

class Resource {
  constructor(resource, index){
    this.id = index + 1;
    this.author = resource.author;
    this.title = resource.title;
    this.url = resource.url; 
  }
}

class Checkpoint {
  constructor(checkpoint, index, parent) {
    this.id = index + 1;
    this.waypoint = { 
      title: parent.title,
      id: parent.id
    };
    this.title = checkpoint.title;
    this.description = checkpoint.description;
    this.instructions = checkpoint.instructions;
    this.resources = R.mapIndexed((resource, index) => new Resource(resource, index), checkpoint.resources); 
  };
};

class Waypoint {
  constructor(waypoint) {
    this.id = 1;
    this.title = waypoint.title 
    this.curator = waypoint.curator; 
    this.summary = waypoint.summary; 
    this.description = waypoint.description;
    this.checkpoints = R.mapIndexed((checkpoint, index) => new Checkpoint(checkpoint, index, this), waypoint.checkpoints);
  };

};

let waypoint = new Waypoint(store_data);
let allWaypoints = [waypoint]; 

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

