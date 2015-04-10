import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import LevelButton from '../../../src/components/sidebar/controlPanel/levelPanel/LevelButton.jsx';
import Actions from '../../../src/actions/index.js';
import _ from 'lodash';

describe("Level Button", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("level is not set", () => {

    beforeEach(() => {
      let level = ['waypoints', false];
      let isActive = false;
      [element] = renderButton(level, isActive);
    });

    it("has the right class name", () => {
      expect(element.className).to.contain('waypointsButton');
    });

    it("should be disabled", () => {
      expect(element.disabled).to.be.true;
    });

    it("should not be active level", () => {
      expect(element.className).not.to.contain('active');
    });
  });

  describe("level is set", () => {

    beforeEach(() => {
      let level = ['waypoints', 1];
      let isActive = true;
      [element] = renderButton(level, isActive);
    });


    it("should be disabled", () => {
      expect(element.disabled).to.be.false;
    });

    it("should not be active level", () => {
      expect(element.className).to.contain('active');
    });
  });

  describe("click handling", () => {

    beforeEach(() => {
      Actions.setViewModel = sinon.spy();
      React.addons.TestUtils.Simulate.click(element);
    });

    it("calls the right action", () => {
      let selection = { type: 'waypoints' };
      expect(Actions.setViewModel).to.be.calledWith(selection);
    });
  });

});

function renderButton(level, isActive){
  let container = TestUtils.renderIntoDocument(
    <LevelButton isActive={ isActive } level={ level }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
