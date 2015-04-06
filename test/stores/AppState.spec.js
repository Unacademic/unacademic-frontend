import AppStoreStore from '../../src/stores/AppState.js';
import AppStoreConstants from '../../src/constants/AppStateConstants.js';
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
import { Map, Stack }  from 'immutable';

describe.only("AppStore Store", () => {
  let AppStore;
  let TimeMachine;
  let state;
  let ViewModel;

  beforeEach(() => {
    state = { user: 'yeehaa' };
    TimeMachine = {};
    ViewModel = {};
    ViewModel.get = sinon.spy();
    TimeMachine.get = sinon.stub().returns({ toJS(){ return state } });
    AppStore = new AppStoreStore(TimeMachine, ViewModel);
  });

  describe("get current state", () => {

    it("gets the current state from the time machine", () => {
      let { appState } = AppStore.get();
      expect(TimeMachine.get).to.be.called;
    })

    it("sets the corresponding view model", () => {
      let { viewModel } = AppStore.get();
      console.log(viewModel);
      expect(ViewModel.get).to.be.calledWith(state);
    })
  })

  describe("actions", () => {
    let action;

    describe("authentication", () => {

      beforeEach(() => {
        action = { actionType: AppStoreConstants.AUTHENTICATE }
        AppStore.TimeMachine.update = sinon.spy();
        AppStore.handleAction(action);
      });

      it("should pass the new user to the Time Machine", () => {
        expect(AppStore.TimeMachine.update).calledWith({ user: 'yeehaa' });
      });
    });

    describe("switch between modes", () => {

      beforeEach(() => {
        action = {
          actionType: AppStoreConstants.SWITCH_MODE,
          mode: 'browse'
        }
        AppStore.TimeMachine.update = sinon.spy();
        AppStore.handleAction(action);
      });

      it("should pass the new user to the Time Machine", () => {
        expect(AppStore.TimeMachine.update).calledWith({ mode: 'browse' });
      });
    });

    describe("move history back", () => {

      beforeEach(() => {
        action = { actionType: AppStoreConstants.REVERT_HISTORY }
      });

      describe("if changes are accepted", () => {

        beforeEach(() => {
          AppStore.TimeMachine.revertHistory = sinon.stub().returns(true);
          AppStore.emitChange = sinon.spy();
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
          AppStore.emitChange = sinon.spy();
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
          AppStore.emitChange = sinon.spy();
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
          AppStore.emitChange = sinon.spy();
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
