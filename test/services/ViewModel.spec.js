import ViewModelService from '../../src/services/ViewModel.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
import { Map, Stack }  from 'immutable';
require("babel/polyfill");

describe("ViewModel Service", () => {
  let ViewModel;
  let result;
  let levels;

  beforeEach(() => {
    ViewModel = new ViewModelService({});
  });

  it("initializes the api", () => {
    expect(ViewModel.API).not.to.be.undefined;
  });

  describe("get", () => {
    describe("resource", () => {

      beforeEach((done) => {
        levels = Map({ resource: { id: 1 } });
        let appState = Map({ levels });
        let response = { type: 'resource', model: { url: 'hello' } };
        ViewModel.API.get = sinon.stub().returns(response);

        ViewModel.get(appState).then((data) => {
          result = data;
          done();
        });
      });

      it("fetches the data from the API", () => {
        expect(ViewModel.API.get).to.be.calledWith(levels.toJS());
      });

      it("has a model", () => {
        expect(result.model).to.be.defined;
      });

      it("has a url", () => {
        expect(result.url).to.equal('hello');
      });
    });

    describe("checkpoint", () => {

      beforeEach((done) => {
        let levels = Map({ checkpoint: { id: 1 } });
        let appState = Map({ levels });
        let response = { type: 'checkpoint', model: { resources: [] } };
        ViewModel.API.get = sinon.stub().returns(response);

        ViewModel.get(appState).then((data) => {
          result = data;
          done();
        });
      });

      it("has a model", () => {
        expect(result.model).to.be.defined;
      });

      it("has a collection", () => {
        expect(result.collection.length).to.equal(0);
      });
    });

    describe("waypoint", () => {

      beforeEach((done) => {
        let levels = Map({ waypoint: { id: 1 } });
        let appState = Map({ levels });
        let response = { type: 'waypoint', model: { checkpoints: [] } };
        ViewModel.API.get = sinon.stub().returns(response);

        ViewModel.get(appState).then((data) => {
          result = data;
          done();
        });
      });

      it("has a model", () => {
        expect(result.model).to.be.defined;
      });

      it("has a collection", () => {
        expect(result.collection.length).to.equal(0);
      });
    });

    describe("waypoints", () => {

      beforeEach((done) => {
        let levels = Map({ waypoints: { id: 1 } });
        let appState = Map({ levels });
        let response = { type: 'waypoints', model: [] };
        ViewModel.API.get = sinon.stub().returns(response);

        ViewModel.get(appState).then((data) => {
          result = data;
          done();
        });
      });

      it("has a model", () => {
        expect(result.model).not.to.be.defined;
      });

      it("has a collection", () => {
        expect(result.collection.length).to.equal(0);
      });
    });
  });

});
