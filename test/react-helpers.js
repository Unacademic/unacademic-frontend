import chai from 'chai';
import R from 'ramda';
import sinonChai from 'sinon-chai'
import sinon from 'sinon';
import React from 'react/addons';
import { jsdom } from 'jsdom';

import { allWaypoints } from '../src/utils/WaypointsFactory'

let expect = chai.expect;
chai.use(sinonChai);

let collection = allWaypoints;
let title = '_Unacademic';
let model = { title };
let viewModel = { model, collection };

let user = undefined;

let modes = {
  learn: 'active',
  curate: ''
};

let history = [];

let view = { waypoints: false, waypoint: false, checkpoint: false };

let appState = { user, modes, history, viewModel: view };

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
