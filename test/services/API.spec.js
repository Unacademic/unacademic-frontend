import APIService from '../../src/services/API.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
require("babel/polyfill");

import nock from 'nock';

require("babel/polyfill");

describe.only("API Service", () => {
  let API;
  let waypoints;
  let server;

  beforeEach((done) => {
    let payload = fixtures.viewModel.collection;
    let baseUrl = 'http://189.166.97.196/api/0';
    nock(baseUrl).get('/waypoints').reply(200, payload);

    new APIService(baseUrl).getWaypoints().then((data) => {
      waypoints = data;
      done();
    });
  });

  it("should get all waypoints", () => {
    expect(waypoints.length).to.equal(2);
  });

});
