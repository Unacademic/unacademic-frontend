import ModesService from '../../src/services/Modes.js'
import { React, TestUtils, fixtures, testdom } from '../react-helpers';
require("babel/polyfill");

describe("Modes Service", () => {
  let Modes;

  beforeEach(() => {
    Modes = new ModesService();
  });

  it("sets the current mode", () => {
    let expectation = {
      current: 'learn',
      learn: 'active',
      curate: ''
    };

    let modes = Modes.set('learn');

    expect(modes).to.deep.equal(expectation);
  });
});
