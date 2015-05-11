import ViewModelService from '../../src/services/ViewModel.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
require("babel/polyfill");

describe.only("ViewModel Service", () => {
  let ViewModel;
  let appState;
  let result;

  class MockAPI {
    get(){
      let allWaypoints = fixtures.viewModel.collection
      return Promise.resolve(allWaypoints);
    }
  }

  beforeEach(() => {
    ViewModel = new ViewModelService(new MockAPI);
  });

  it("initializes the api", () => {
    expect(ViewModel.API).not.to.be.undefined;
  });

  describe("waypoints", () => {
    let levels;

    beforeEach(() => {
      levels = { waypoints: { id: 'all'} };
    });

    describe("get viewModel", () => {

      describe("without a user", () => {
        beforeEach((done) => {
          appState = { levels };

          ViewModel.get(appState).then((data) => {
            result = data;
            done();
          });
        });

        it("has no title", () => {
          let { model } = result;
          let { title } = model;
          expect(title).to.equal('_Unacademic');
        });

        it("fetches the data from the API")

        it("has a collection of waypoints", () => {
          let { collection } = result;
          expect(collection.length).to.equal(2);
        });
      });

      describe("with a user", () => {

        beforeEach((done) => {
          appState = { levels, user: 'yeehaa' };

          ViewModel.get(appState).then((data) => {
            result = data;
            done();
          });
        });

        it("has a collection of waypoints", () => {
          let { collection } = result;
          expect(collection.length).to.equal(2);
        });
      });
    });
  });

  describe("set viewModel", () => {
    let current;
    let expectation;
    let proposal;

    describe("selection has type and id", () => {

      describe("selection is child", () => {
        beforeEach(() => {

          current = {
            waypoints: { id:1, title: 'home' },
            waypoint: { id: 1, title: 'tada' },
            checkpoint: { id: 1, title: 'tada' },
            resource: false
          };

          expectation = {
            waypoints: { id:1, title: 'home' },
            waypoint: { id: 1, title: 'tada' },
            checkpoint: { id: 1, title: 'tada' },
            resource: { id: 1, title: 'yo' }
          };

          let selection = { type: 'resource', title: 'yo', id: 1 };
          proposal = ViewModel.set({ current, selection });
        });

        it("sets the model to the proposal", () => {
          expect(proposal).to.deep.equal(expectation);
        });
      });

      describe("selection is parent", () => {
        beforeEach(() => {

          current = {
            waypoints: { id:1, title: 'home' },
            waypoint: { id: 1, title: 'tada' },
            checkpoint: { id: 1, title: 'tada' },
            resource: { id: 1, title: 'tada' }
          };

          expectation = {
            waypoints: { id:1, title: 'home' },
            waypoint: { id: 1, title: 'tada' },
            checkpoint: false,
            resource: false
          };

          let selection = { type: 'waypoint', title: 'tada', id: 1 };
          proposal = ViewModel.set({ current, selection });
        });

        it("sets the model to the proposal", () => {
          expect(proposal).to.deep.equal(expectation);
        });
      });
    });
  });
});

function getViewModel(appState){
  return new Promise((resolve, reject) => {
    ViewModel.get(appState).then((data) => resolve(data));
  });
}
