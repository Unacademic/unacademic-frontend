import AppStoreStore from '../../src/stores/AppState.js';
import AppStoreConstants from '../../src/constants/AppStateConstants.js';
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
import { Map, Stack }  from 'immutable';

describe("AppStore Store", () => {
  let AppStore;
  let TimeMachineService;
  let initialState;

  beforeEach(() => {
    TimeMachineService = sinon.stub();
    initialState = { mode: 'browse' }
    let TimeMachine = new TimeMachineService(initialState);
    AppStore = new AppStoreStore(TimeMachine);
  });

  describe("get current state", () => {

    beforeEach(() => {
      createPropertyStub(AppStore.TimeMachine, 'current', initialState)
    });

    it("gets the current state from the time machine", () => {
      let { appState } = AppStore.current;
      expect(appState.mode).to.equal('browse');
    })

    it("sets the corresponding view model", () => {
      let { viewModel } = AppStore.current;
      expect(viewModel.level).to.equal('waypoints');
    })
  })

  // MOVE TO SERVICE

  describe("without a user", ()=> {

    beforeEach(() => {
      createPropertyStub(AppStore.TimeMachine, 'current', initialState)
    });

    it("sets the corresponding collection", () => {
      let { viewModel } = AppStore.current;
      expect(viewModel.collection.length).to.equal(9);
    })
  });

  describe("without a user", ()=> {

    beforeEach(() => {
      initialState.user = 'yeehaa';
      createPropertyStub(AppStore.TimeMachine, 'current', initialState)
    });

    it("sets the corresponding collection", () => {
      let { viewModel } = AppStore.current;
      expect(viewModel.collection.length).to.equal(5);
    })
  });

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
