import APIService from '../../src/services/API.js'
import Waypoint from '../../src/models/Waypoint';

import nock from 'nock';
import 'babel/polyfill';
import { React, TestUtils, fixtures, testdom } from '../react-helpers';


describe.only("API Service", () => {
  let API;
  let server;
  let baseUrl;

  beforeEach(() => {
    baseUrl = 'http://189.166.97.196/api/0';
    API = new APIService(baseUrl);
  });

  describe("get waypoints", ()=> {
    let waypoints;

    describe("when everything goes well", ()=> {

      beforeEach((done) => {
        let payload = fixtures.viewModel.collection;
        nock(baseUrl).get('/waypoints').reply(200, payload);

        API.getWaypoints().then((data) => {
          waypoints = data;
          done();
        });
      });

      it("should get all waypoints", () => {
        expect(waypoints.length).to.equal(2);
        expect(waypoints[0]).to.be.an.instanceOf(Waypoint);
      });
    });

    describe("in case there is a error", ()=> {

      beforeEach((done) => {
        nock(baseUrl).get('/waypoints').reply(404);

        API.getWaypoints().then((data) => {
          waypoints = data;
          done();
        });
      });

      it("should get all waypoints", () => {
        expect(waypoints.length).to.equal(0);
      });
    });
  });
});
