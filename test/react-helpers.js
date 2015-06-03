import chai from 'chai';
import R from 'ramda';
import sinonChai from 'sinon-chai'
import sinon from 'sinon';
import React from 'react/addons';
import { jsdom } from 'jsdom';

import fixtures from './fixtures/index';

let expect = chai.expect;
chai.use(sinonChai);
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
