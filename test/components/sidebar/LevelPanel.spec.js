import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import LevelPanel from '../../../src/components/sidebar/controlPanel/levelPanel/LevelPanel.jsx';
import Actions from '../../../src/actions/index.js';
import _ from 'lodash';

describe("Level Panel", () => {
  let element;
  let viewModel;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("none selected", () => {

    beforeEach(() => {
      viewModel = {
        waypoints: false,
        waypoint: false,
        checkpoint: false
      };
      [element] = renderPanel(viewModel);
    });

    it("has the right class on the container", () => {
      expect(element.className).to.contain('panel');
      expect(element.className).to.contain('panel-left');
      expect(element.className).to.contain('panel-level');
    });

    it("has a button for each level", () => {
      let buttons = _.toArray(element.querySelectorAll('button'));
      let [waypointsButton, waypointButton, checkpointButton] = buttons;
      expect(waypointsButton.className).to.contain('btn-waypoints');
      expect(waypointButton.className).to.contain('btn-waypoint');
      expect(checkpointButton.className).to.contain('btn-checkpoint');
    });

    it("they are all disabled", () => {
      let enabledButtons = element.querySelectorAll(':disabled');
      expect(enabledButtons.length).to.equal(3);
    });

    it("none is active", () => {
      let activeButtons = element.querySelectorAll('.active');
      expect(activeButtons.length).to.equal(0);
    });
  });

  describe("one level selected", () => {

    beforeEach(() => {
      viewModel = {
        waypoints: 1,
        waypoint: false,
        checkpoint: false
      };
      [element] = renderPanel(viewModel);
    });

    it("two are all disabled", () => {
      let enabledButtons = element.querySelectorAll(':disabled');
      expect(enabledButtons.length).to.equal(2);
    });

    it("waypoints is active", () => {
      let activeButtons = element.querySelectorAll('.btn-is-active');
      expect(activeButtons[0].className).to.contain('btn-waypoints');
      expect(activeButtons.length).to.equal(1);
    });
  });

  describe("multiple levels selected", () => {

    beforeEach(() => {
      viewModel = {
        waypoints: 1,
        waypoint: 1,
        checkpoint: 1
      };
      [element] = renderPanel(viewModel);
    });

    it("two are all disabled", () => {
      let enabledButtons = element.querySelectorAll(':disabled');
      expect(enabledButtons.length).to.equal(0);
    });

    it("checkpoint is active", () => {
      let activeButtons = element.querySelectorAll('.btn-is-active');
      expect(activeButtons[0].className).to.contain('btn-checkpoint');
      expect(activeButtons.length).to.equal(1);
    });
  });
});

function renderPanel(viewModel){
  let container = TestUtils.renderIntoDocument(
    <LevelPanel viewModel={ viewModel }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
