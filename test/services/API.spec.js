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
    API = new APIService(baseUrl);
  });

  describe("get waypoints", ()=> {
    let waypoints;

    beforeEach((done) => {
      let levels = { waypoints: 'all' };
      API.get(levels).then((data) => {
        waypoints = data;
        done();
      });
    });

    it("returns a collection", () => {
        expect(waypoints.length).to.equal(2);
    });
  });

  describe("get waypoint", ()=> {
    let waypoint;

    beforeEach((done) => {
      let levels = {
        waypoints: 'all',
        waypoint: { id: 1, title: 'tada' }
      };

      API.get(levels).then((data) => {
        waypoint = data;
        done();
      });
    });

    it("returns a collection", () => {
        expect(waypoint.title).to.equal('Prevent Wheel Reinvention');
    });
  });

  describe("get checkpoint", ()=> {
    let checkpoint;

    beforeEach((done) => {
      let levels = {
        waypoints: 'all',
        waypoint: { id: 1, title: 'tada' },
        checkpoint: { id: 1, title: 'hi' }
      };

      API.get(levels).then((data) => {
        checkpoint = data;
        done();
      });
    });

    it("returns a collection", () => {
        expect(checkpoint.title).to.equal('Structure your Story');
    });
  });
});
