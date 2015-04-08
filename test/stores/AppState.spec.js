import AppStoreStore from '../../src/stores/AppState.js';
import AppStoreConstants from '../../src/constants/AppStateConstants.js';
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
import { Map, Stack }  from 'immutable';

describe("AppStore Store", () => {
  let AppStore;
  let TimeMachine;
  let state;
  let ViewModel;
  let selection;

  beforeEach(() => {
    state = {
      user: 'yeehaa',
      viewModel: {
        waypoint: 1
      }
    };
    TimeMachine = {};
    ViewModel = {};

    ViewModel.get = sinon.spy();
    TimeMachine.get = sinon.stub().returns({ toJS(){ return state } });

    AppStore = new AppStoreStore(TimeMachine, ViewModel);

    AppStore.emitChange = sinon.spy();
    AppStore.ViewModel.set = sinon.stub().returns(selection);
    AppStore.TimeMachine.update = sinon.stub().returns(true);
  });

  describe("get current state", () => {

    it("gets the current state from the time machine", () => {
      let { appState } = AppStore.get();
      expect(TimeMachine.get).to.be.called;
    })

    it("sets the corresponding view model", () => {
      let { viewModel } = AppStore.get();
      expect(ViewModel.get).to.be.calledWith(state);
    })
  })

  describe("actions", () => {
    let action;

    describe("authentication", () => {

      beforeEach(() => {
        action = { actionType: AppStoreConstants.AUTHENTICATE }
        AppStore.TimeMachine.update = sinon.stub().returns(true);
        AppStore.handleAction(action);
      });

      it("passes the new user to the Time Machine", () => {
        let viewModel = { waypoints: 'user' };
        expect(AppStore.TimeMachine.update).calledWith({ user: 'yeehaa', viewModel });
      });
    });

    describe("set view model", () => {
      let current;

      beforeEach(() => {
        current = state.viewModel;
        action = { actionType: AppStoreConstants.SET_VIEW_MODEL, selection }

        AppStore.handleAction(action);
      });

      it("calls the view model set function", () => {
        expect(AppStore.ViewModel.set).calledWith({ current, selection });
      });

      it("passes the selection to the Time Machine", () => {
        let viewModel = selection;
        expect(AppStore.TimeMachine.update).calledWith({ viewModel });
      });

      it("emits a change", () => {
        expect(AppStore.emitChange).called;
      });
    });

    describe("switch between modes", () => {

      beforeEach(() => {
        action = {
          actionType: AppStoreConstants.SWITCH_MODE,
          mode: 'browse'
        }
        AppStore.TimeMachine.update = sinon.stub().returns(true);
        AppStore.handleAction(action);
      });

      it("passes the new user to the Time Machine", () => {
        expect(AppStore.TimeMachine.update).calledWith({ mode: 'browse' });
      });

      it("emits a change", () => {
        expect(AppStore.emitChange).called;
      });
    });

    describe("move history back", () => {

      beforeEach(() => {
        action = { actionType: AppStoreConstants.REVERT_HISTORY }
      });

      describe("if changes are accepted", () => {

        beforeEach(() => {
          AppStore.TimeMachine.revertHistory = sinon.stub().returns(true);
          AppStore.handleAction(action);
        });

        it("should pass the new user to the Time Machine", () => {
          expect(AppStore.TimeMachine.revertHistory).called;
        });

        it("should emit a change", () => {
          expect(AppStore.emitChange).called;
        });
      });

      describe("if changes are declined", () => {

        beforeEach(() => {
          AppStore.TimeMachine.revertHistory = sinon.stub().returns(false);
          AppStore.handleAction(action);
        });

        it("should pass the new user to the Time Machine", () => {
          expect(AppStore.TimeMachine.revertHistory).called;
        });

        it("should emit a change", () => {
          expect(AppStore.emitChange).not.called;
        });
      });
    });

    describe("move history forward", () => {

      beforeEach(() => {
        action = { actionType: AppStoreConstants.FORWARD_HISTORY }
      });

      describe("if changes are accepted", () => {

        beforeEach(() => {
          AppStore.TimeMachine.forwardHistory = sinon.stub().returns(true);
          AppStore.handleAction(action);
        });

        it("should pass the new user to the Time Machine", () => {
          expect(AppStore.TimeMachine.forwardHistory).called;
        });

        it("should emit a change", () => {
          expect(AppStore.emitChange).called;
        });
      });

      describe("if changes are declined", () => {

        beforeEach(() => {
          AppStore.TimeMachine.forwardHistory = sinon.stub().returns(false);
          AppStore.handleAction(action);
        });

        it("should pass the new user to the Time Machine", () => {
          expect(AppStore.TimeMachine.forwardHistory).called;
        });

        it("should emit a change", () => {
          expect(AppStore.emitChange).not.called;
        });
      });
    });
  });
});

function createPropertyStub(object, propertyName, state){
  Object.defineProperty(object, propertyName, {
    get(){ return { toJS(){ return state; } } }
  });
}
