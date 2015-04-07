import TimeMachineService from '../../src/services/TimeMachine.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
import { Map }  from 'immutable';

describe("TimeMachineService Service", () => {
  let TimeMachine;
  let currentAppState;

  beforeEach(() => {
    let initialState = Map({
      timestamp: Date.now(),
      user: undefined,
      mode: 'browse',
    });
    TimeMachine = new TimeMachineService(initialState);
  });

  describe("initial state", () => {

    beforeEach(() => {
      currentAppState = TimeMachine.get().toJS();
    });

    it("has the default data", () => {
      let { timestamp, user, mode } = currentAppState;
      expect(timestamp).to.be.defined;
      expect(mode).to.equal('browse');
      expect(user).to.be.undefined;
    })

    it("knows its place in history", () => {
      let { isEarliest, isLatest } = currentAppState.history;
      expect(isEarliest).to.be.true;
      expect(isLatest).to.be.true;
    })
  });

  describe("Modifying History", () => {
    let change;
    let viewModel;

    beforeEach(() => {
      viewModel = Map({ Waypoint: 1 })
      change = TimeMachine.update({ mode: 'learn', viewModel });
    });

    describe("update history", () => {

      it("returns true", () => {
        expect(change).to.be.true;
      });

      it("starts from the correct location", () => {
        let { mode, isEarliest, isLatest, viewModel } = getStateData();
        expect(mode).to.equal('learn');
        expect(viewModel.Waypoint).to.equal(1);
        expect(isEarliest).to.be.false;
        expect(isLatest).to.be.true;
      })
    });

    describe("reverting history", () => {

      beforeEach(() => {
        change = TimeMachine.revertHistory();
      });

      it("returns true", () => {
        expect(change).to.be.true;
      });

      it("can move backwards in time", () => {
        let { mode, isEarliest, isLatest } = getStateData();
        expect(mode).to.equal('browse');
        expect(isEarliest).to.be.true;
        expect(isLatest).to.be.false;
      })

      it("cannot move past the beginning of time", () => {
        change = TimeMachine.revertHistory();
        expect(change).to.be.false;
      })
    });

    describe("forwarding history", () => {

      beforeEach(() => {
        TimeMachine.revertHistory();
        change = TimeMachine.forwardHistory();
      });


      it("returns true", () => {
        expect(change).to.be.true;
      });

      it("can move forwards in time", () => {
        let { mode, isEarliest, isLatest } = getStateData();
        expect(mode).to.equal('learn');
        expect(isEarliest).to.be.false;
        expect(isLatest).to.be.true;
      })

      it("cannot move further than the end of time", () => {
        change = TimeMachine.forwardHistory();
        expect(change).to.be.false;
      })
    });

    describe("displacing history", () => {

      beforeEach(() => {
        TimeMachine.revertHistory();
        change = TimeMachine.update({ mode: 'learn'});
      });

      it("returns true", () => {
        expect(change).to.be.true;
      });

      it("can displace history", () => {
        let { mode, isEarliest, isLatest } = getStateData();
        expect(mode).to.equal('learn');
        expect(isEarliest).to.be.false;
        expect(isLatest).to.be.true;
      })
    });
  });

  function getStateData(){
    let currentAppState = TimeMachine.get().toJS();
    let { mode, history, viewModel } = currentAppState;
    let { isEarliest, isLatest } = currentAppState.history;
    return { mode, isEarliest, isLatest, viewModel };
  }
});
