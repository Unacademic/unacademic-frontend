import ViewModelService from '../../src/services/ViewModel.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
require("babel/polyfill");

describe("ViewModel Service", () => {
  let ViewModel;
  let appState;
  let result;

  beforeEach(() => {
    ViewModel = new ViewModelService({});
  });

  it("initializes the api", () => {
    expect(ViewModel.API).not.to.be.undefined;
  });

  describe.only("default", () => {
    let levels;

    beforeEach(() => {
      levels = { waypoint: { id: 1 } };
    });

    describe("get viewModel", () => {

      beforeEach((done) => {
        appState = { levels };

        let response = {
          type: 'waypoint',
          model: { checkpoints: [] }
        };

        ViewModel.API.get = sinon.stub().returns(response);

        ViewModel.get(appState).then((data) => {
          result = data;
          done();
        });
      });


      it("fetches the data from the API", () => {
        expect(ViewModel.API.get).to.be.called;
      });

      it("has a model", () => {
        let { model} = result;
        expect(model).to.be.defined;
      });

      it("has a collection", () => {
        let { collection } = result;
        expect(collection.length).to.equal(0);
      });
    });
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
});
