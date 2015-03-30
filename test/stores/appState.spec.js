import AppStateStore from '../../src/stores/appState.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';

describe("AppState Store", () => {
  let AppState;

  beforeEach(() => {
    AppState = new AppStateStore();
  });

  describe("initial state", () => {

    it("has the default data", () => {
      let { timestamp, user, mode, history } = AppState.current;
      expect(timestamp).to.be.defined;
      expect(user).to.be.undefined;
      expect(history.isEarliest).to.be.true;
      expect(history.isLatest).to.be.true;
    })
  });
});
