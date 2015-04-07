import ViewModelService from '../../src/services/ViewModel.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
require("babel/polyfill");

describe.only("ViewModel Service", () => {
  let ViewModel;
  let appState;
  let result;

  describe("when level is waypoints", () => {

     beforeEach(() => {
       ViewModel = new ViewModelService();
     });

    describe("without a user", () => {

      beforeEach((done) => {

        let viewModel = { waypoints: 'all' };
        appState = { viewModel };

        ViewModel.get(appState).then((data) => {
          result = data;
          done();
        });
      });

      it("has no title", () => {
        let { title } = result;
        expect(title).to.be.undefined;
      });

      it("has a collection of waypoints", () => {
        let { collection } = result;
        expect(collection.length).to.equal(9);
        expect(collection[0].constructor.name).to.equal('Waypoint');
      });
    });

    describe("with a user", () => {

      beforeEach((done) => {

        let viewModel = { level: 'waypoints' };
        let user = 'yeehaa';
        appState = { viewModel, user };

        ViewModel.get(appState).then((data) => {
          result = data;
          done();
        });
      });

      it("has no title", () => {
        let { title } = result;
        expect(title).to.be.undefined;
      });

      it("has a collection of waypoints", () => {
        let { collection } = result;
        expect(collection.length).to.equal(2);
        expect(collection[0].constructor.name).to.equal('Waypoint');
      });
    });

  });
});

function getViewModel(appState){
  return new Promise((resolve, reject) => {
    ViewModel.get(appState).then((data) => {
      resolve(data);
    });
  });
}
