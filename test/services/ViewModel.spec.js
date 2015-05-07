import ViewModelService from '../../src/services/ViewModel.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
require("babel/polyfill");

describe("ViewModel Service", () => {
  let ViewModel;
  let appState;
  let result;

  beforeEach(() => {
    let allWaypoints = () => fixtures.viewModel.collection;
    ViewModel = new ViewModelService(allWaypoints);
  });

  describe("get viewModel", () => {

    describe("when level is waypoints", () => {

      describe("without a user", () => {
        beforeEach((done) => {
          let levels = { waypoints: { id: 'all'} };
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

        it("has a collection of waypoints", () => {
          let { collection } = result;
          expect(collection.length).to.equal(2);
        });
      });

      describe("with a user", () => {

        beforeEach((done) => {
          let levels = { waypoints: 'all' };
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
            waypoint: false,
            checkpoint: false
          };

          expectation = {
            waypoints: { id:1, title: 'home' },
            waypoint: { id: 1, title: 'tada' },
            checkpoint: false
          };

          let selection = { type: 'waypoint', title: 'tada', id: 1 };
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
          };

          expectation = {
            waypoints: { id:1, title: 'home' },
            waypoint: { id: 1, title: 'tada' },
            checkpoint: false
          };

          let selection = { type: 'waypoint', title: 'tada', id: 1 };
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
