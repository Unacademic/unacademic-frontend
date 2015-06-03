import R from 'ramda';

import waypoint1 from './waypoint1.yml';
import waypoint2 from './waypoint2.yml';

import Waypoint from '../../src/models/Waypoint';

let index = 0;

function generateUID(){
  index = index + 1;
  return index;
}

let wp1 = new Waypoint(waypoint1, generateUID());
let wp2 = new Waypoint(waypoint2, generateUID());
let allWaypoints = [wp1, wp2];

let collection = allWaypoints;
let data = { content: '' };
let title = '_Unacademic';
let model = { title };

let viewModel = {
  model,
  collection,
  data
};

let user = undefined;

let modes = {
  current: 'learn',
  learn: 'active',
  curate: ''
};

let history = [];

let levels = {
  current: 'waypoints',
  waypoints: 'hi',
  waypoint: false,
  checkpoint: false
};

let appState = { user, modes, history, levels };

let fixtures = { appState, viewModel };

export default fixtures;
