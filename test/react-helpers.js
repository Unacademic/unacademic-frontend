import chai from 'chai';
import R from 'ramda';
import sinonChai from 'sinon-chai'
import sinon from 'sinon';
import React from 'react/addons';
import { jsdom } from 'jsdom';

import store_data from '../src/waypoints/store_data.yml';
import program from '../src/waypoints/program_or_be_programmed.yml';
import Waypoint from '../src/models/Waypoint';

let index = 0;

function generateUID(){
  index = index + 1;
  return index;
}

let waypoint1 = new Waypoint(program, generateUID());
let waypoint2 = new Waypoint(store_data, generateUID());
let allWaypoints = [waypoint1, waypoint2];

let expect = chai.expect;
chai.use(sinonChai);

let collection = allWaypoints;
let data = '';
let title = '_Unacademic';
let model = { title };
let viewModel = { model, collection, data };

let user = undefined;

let modes = { current: 'learn', learn: 'active', curate: '' };

let history = [];

let levels = { current: 'waypoints', waypoints: 'hi', waypoint: false, checkpoint: false };

let appState = { user, modes, history, levels };

let fixtures = { appState, viewModel };

global.expect = expect;
global.sinon = sinon;

function testdom(markup){
  if (typeof document !== 'undefined') return
  global.document = jsdom(markup || '')
  global.window = document.defaultView;
  global.navigator = {};
}

let TestUtils = React.addons.TestUtils;

export { React, TestUtils, fixtures, testdom };
