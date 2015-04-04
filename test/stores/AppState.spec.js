import AppStateStore from '../../src/stores/AppState.js';
import AppStateConstants from '../../src/constants/AppStateConstants.js';
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
import { Map, Stack }  from 'immutable';

describe("AppState Store", () => {
  let AppState;
  let TimeMachineService;
  let initialState;

  beforeEach(() => {
    TimeMachineService = sinon.stub();
    initialState = { user: 'yeehaa' }
    let TimeMachine = new TimeMachineService(initialState);
    AppState = new AppStateStore(TimeMachine);
  });

  describe("initial state", () => {

    it("initializes the time machine", () => {
      expect(TimeMachineService).to.be.calledWith(initialState)
    })
  });

  describe("get current state", () => {

    beforeEach(() => {
      createPropertyStub(AppState.TimeMachine, 'current')
      AppState.current;
    });

    it("gets the current state from the time machine", () => {
      expect(AppState.current).to.equal('success');
    })
  });

  describe("actions", () => {
    let action;

    describe("authentication", () => {

      beforeEach(() => {
        action = { actionType: AppStateConstants.AUTHENTICATE }
        AppState.TimeMachine.update = sinon.spy();
        AppState.handleAction(action);
      });

      it("should pass the new user to the Time Machine", () => {
        expect(AppState.TimeMachine.update).calledWith({ user: 'yeehaa' });
      });
    });

    describe("browsing a model", () => {
      let id;

      beforeEach(() => {
        id = 1;
        action = {
          actionType: AppStateConstants.BROWSE_MODEL,
          selection: { id }
        }
        AppState.handleAction(action);
      });

      it("should set right id for the current model", () => {
        expect(AppState.viewModel).to.deep.equal({ id });
      });
    });

    describe("switch between modes", () => {

      beforeEach(() => {
        action = {
          actionType: AppStateConstants.SWITCH_MODE,
          mode: 'browse'
        }
        AppState.TimeMachine.update = sinon.spy();
        AppState.handleAction(action);
      });

      it("should pass the new user to the Time Machine", () => {
        expect(AppState.TimeMachine.update).calledWith({ mode: 'browse' });
      });
    });

    describe("move history back", () => {

      beforeEach(() => {
        action = { actionType: AppStateConstants.REVERT_HISTORY }
      });

      describe("if changes are accepted", () => {

        beforeEach(() => {
          AppState.TimeMachine.revertHistory = sinon.stub().returns(true);
          AppState.emitChange = sinon.spy();
          AppState.handleAction(action);
        });

        it("should pass the new user to the Time Machine", () => {
          expect(AppState.TimeMachine.revertHistory).called;
        });

        it("should emit a change", () => {
          expect(AppState.emitChange).called;
        });
      });

      describe("if changes are declined", () => {

        beforeEach(() => {
          AppState.TimeMachine.revertHistory = sinon.stub().returns(false);
          AppState.emitChange = sinon.spy();
          AppState.handleAction(action);
        });

        it("should pass the new user to the Time Machine", () => {
          expect(AppState.TimeMachine.revertHistory).called;
        });

        it("should emit a change", () => {
          expect(AppState.emitChange).not.called;
        });
      });
    });

    describe("move history forward", () => {

      beforeEach(() => {
        action = { actionType: AppStateConstants.FORWARD_HISTORY }
      });

      describe("if changes are accepted", () => {

        beforeEach(() => {
          AppState.TimeMachine.forwardHistory = sinon.stub().returns(true);
          AppState.emitChange = sinon.spy();
          AppState.handleAction(action);
        });

        it("should pass the new user to the Time Machine", () => {
          expect(AppState.TimeMachine.forwardHistory).called;
        });

        it("should emit a change", () => {
          expect(AppState.emitChange).called;
        });
      });

      describe("if changes are declined", () => {

        beforeEach(() => {
          AppState.TimeMachine.forwardHistory = sinon.stub().returns(false);
          AppState.emitChange = sinon.spy();
          AppState.handleAction(action);
        });

        it("should pass the new user to the Time Machine", () => {
          expect(AppState.TimeMachine.forwardHistory).called;
        });

        it("should emit a change", () => {
          expect(AppState.emitChange).not.called;
        });
      });
    });
  });
});

function createPropertyStub(object, propertyName){
  Object.defineProperty(object, propertyName, {
    get(){ return { toJS(){ return 'success'; } } }
  });
}
