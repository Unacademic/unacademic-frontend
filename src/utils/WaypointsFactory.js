import faker from 'faker';
import R from 'ramda';
import _ from 'lodash';
import store_data from '../waypoints/store_data.yml';
import program from '../waypoints/program_or_be_programmed.yml';
import Waypoint from '../models/Waypoint';

let index = 0;

function generateUID(){
  index = index + 1;
  return index;
}

let allWaypoints = () => {
  return fetch('http://188.166.97.196/api/0/waypoints')
    .then((res) => res.json())
    .then((data) => data.map((item) => new Waypoint(item)))
}


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
