import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import LevelStack from '../../../src/components/levelStack/LevelStack.jsx';
import Actions from '../../../src/actions/index.js';

describe("Level Stack", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("when level is waypoints", () => {
    beforeEach(() => {
      let currentMode = 'waypoints';
      element = renderStack(currentMode);
    })

    it("has the right classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('stack');
      expect(classes).to.contain('stack-is-waypoints');
    });

    it("has no sheets", () => {
      let sheets = element.querySelectorAll('.stack_sheet');
      expect(sheets.length).to.equal(0);
    });
  });

  describe("when level is waypoint", () => {
    beforeEach(() => {
      let currentMode = 'waypoint';
      element = renderStack(currentMode);
    })

    it("has the right classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('stack-is-waypoint');
    });

    it("has one sheets", () => {
      let sheets = element.querySelectorAll('.stack_sheet');
      expect(sheets.length).to.equal(1);
    });
  });

  describe("when level is checkpoint", () => {
    beforeEach(() => {
      let currentMode = 'checkpoint';
      element = renderStack(currentMode);
    })

    it("has the right classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('stack-is-checkpoint');
    });

    it("has two sheets", () => {
      let sheets = element.querySelectorAll('.stack_sheet');
      expect(sheets.length).to.equal(2);
    });
  });
});

function renderStack(currentMode){
  let container = TestUtils.renderIntoDocument(
    <LevelStack currentMode={ currentMode }/>
  );

  return React.findDOMNode(container);
}
