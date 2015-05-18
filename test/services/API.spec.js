import APIService from '../../src/services/API.js'
import Waypoint from '../../src/models/Waypoint';
import response from '../fixtures/firebaseResponse.json';

import nock from 'nock';
import 'babel/polyfill';
import { React, TestUtils, fixtures, testdom } from '../react-helpers';

xdescribe("API Service", () => {
  let API;
  let result;
  let baseUrl = 'https://unacademic-api.firebaseio.com';

  describe("when everything goes well", ()=> {

    beforeEach(() => {
      nock(baseUrl).get('/waypoints.json').reply(200, response.data);
      API = new APIService(baseUrl);
    });

    describe("get waypoints", ()=> {

      beforeEach((done) => {
        let levels = { waypoints: 'all' };
        API.get(levels).then((data) => {
          result = data;
          done();
        });
      });

      it("returns a collection of waypoints", () => {
        let { type, model } = result;
        expect(type).to.equal('waypoints');
        expect(model.length).to.equal(2);
        expect(model[0]).to.be.an.instanceOf(Waypoint);
      });
    });


    xdescribe("get waypoint", ()=> {
      let waypoint;

      beforeEach((done) => {
        let levels = {
          waypoints: 'all',
          waypoint: { id: '2ab9371a0', title: 'tada' }
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

    xdescribe("get checkpoint", ()=> {
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

    xdescribe("get resource", ()=> {
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

  describe("when there is a error", ()=> {

    beforeEach((done) => {
      nock(baseUrl).get('/waypoints.json').replyWithError('oh shiiit');
      let levels = { waypoints: 'all' };
      API.get(levels).then((data) => {
        result = data;
        done();
      });
    });

    it("returns a collection of waypoints", () => {
      let { type, model } = result;
      expect(type).to.equal('waypoints');
      expect(model.length).to.equal(1);
      expect(model[0]).to.be.an.instanceOf(Waypoint);
    });
  });
});
