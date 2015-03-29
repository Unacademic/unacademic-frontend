import chai from 'chai';
import R from 'ramda';
import sinonChai from "sinon-chai"
import sinon from "sinon";
import React from 'react/addons';
import { jsdom } from 'jsdom';

let expect = chai.expect;
chai.use(sinonChai);

class Item {
  constructor(id){
    this.id = id;
    this.description = ['ho'];
    this.checkpoints = ['hi'];
  }
}

let createItem = (id) => new Item(id);
let range = R.times(R.identity, 5);
let collection = R.map(createItem, range);
let model = { collection };

let user = undefined;
let mode = 'browse';
let history = [];
let appState = { user, mode, history };

let fixtures = { appState, model };

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
