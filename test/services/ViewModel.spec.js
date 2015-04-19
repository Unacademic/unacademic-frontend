import ViewModelService from '../../src/services/ViewModel.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
require("babel/polyfill");

describe("ViewModel Service", () => {
  let ViewModel;
  let appState;
  let result;

  beforeEach(() => {
    ViewModel = new ViewModelService();
  });

  describe("get viewModel", () => {

    describe("when level is waypoints", () => {

      describe("without a user", () => {
        beforeEach((done) => {
          let viewModel = { waypoints: 'all'};
          appState = { viewModel };

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

        it("has a collection of waypoints", () => {
          let { collection } = result;
          expect(collection.length).to.equal(1);
        });
      });

      describe("with a user", () => {

        beforeEach((done) => {
          let viewModel = { waypoints: 'all' };
          appState = { viewModel, user: 'yeehaa' };

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
            waypoints: 'all',
            waypoint: false,
            checkpoint: false
          };

          expectation = {
            waypoints: 'all',
            waypoint: 1,
            checkpoint: false
          };

          let selection = { type: 'waypoint', id: 1 };
          proposal = ViewModel.set({ current, selection });
        });

        it("sets the model to the proposal", () => {
          expect(proposal).to.deep.equal(expectation);
        });
      });

      describe("selection is parent", () => {
        beforeEach(() => {

          current = {
            waypoints: 'all',
            waypoint: 1,
            checkpoint: 1
          };

          expectation = {
            waypoints: 'all',
            waypoint: 1,
            checkpoint: false
          };

          let selection = { type: 'waypoint', id: 1 };
          proposal = ViewModel.set({ current, selection });
        });

        it("sets the model to the proposal", () => {
          expect(proposal).to.deep.equal(expectation);
        });
      });
    });

    xdescribe('selection only has id', () => {

      beforeEach(() => {
        current = {
          waypoints: 'all',
          waypoint: 1,
          checkpoint: 1
        };

        expectation = {
          waypoints: 'all',
          waypoint: false,
          checkpoint: false
        };
      });

      let selection = { type: 'waypoints' };

      it("sets the model to the parent model", () => {
        proposal = ViewModel.set({ current, selection });
        expect(proposal).to.deep.equal(expectation);
      });
    });

  });
});

function getViewModel(appState){
  return new Promise((resolve, reject) => {
    ViewModel.get(appState).then((data) => resolve(data));
  });
}
