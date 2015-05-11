import APIService from '../../src/services/API.js'
import Waypoint from '../../src/models/Waypoint';

import nock from 'nock';
import 'babel/polyfill';
import { React, TestUtils, fixtures, testdom } from '../react-helpers';


describe("API Service", () => {
  let API;
  let server;
  let baseUrl;
  let levelName;

  beforeEach(() => {
    API = new APIService(baseUrl);
  });

  describe("get waypoints", ()=> {
    let waypoints;

    beforeEach((done) => {
      let levels = { waypoints: 'all' };
      API.get(levels).then(({ type, model }) => {
        waypoints = model;
        levelName = type;
        done();
      });
    });

    it("returns a collection of waypoints", () => {
      expect(levelName).to.equal('waypoints');
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

      API.get(levels).then(({ type, model }) => {
        waypoint = model;
        levelName = type;
        done();
      });
    });

    it("returns a collection", () => {
      expect(levelName).to.equal('waypoint');
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

      API.get(levels).then(({ type, model }) => {
        checkpoint = model;
        levelName = type;
        done();
      });
    });

    it("returns a collection", () => {
      expect(levelName).to.equal('checkpoint');
      expect(checkpoint.title).to.equal('Structure your Story');
    });
  });

  describe("get resource", ()=> {
    let resource;

    beforeEach((done) => {
      let levels = {
        waypoints: 'all',
        waypoint: { id: 1, title: 'tada' },
        checkpoint: { id: 1, title: 'hi' },
        resource: { id: 1, title: 'hi' }
      };

      API.get(levels).then(({ type, model }) => {
        resource = model;
        levelName = type;
        done();
      });
    });

    it("returns a collection", () => {
      expect(levelName).to.equal('resource');
      expect(resource.title).to.equal('25 ways to plot, plan and prep your story');
    });
  });
});
