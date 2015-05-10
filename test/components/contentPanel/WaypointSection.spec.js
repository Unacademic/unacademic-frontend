import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import WaypointSection from '../../../src/components/contentPanel/WaypointSection.jsx';

import Actions from '../../../src/actions/index.js';

describe("Waypoint Section", () => {
  let element;
  let waypoint;
  let checkpoint;
  let resource;

  beforeEach(() => {
    Actions.switchMode = sinon.spy();
    testdom('<html><body></body></html>');
    [waypoint] = fixtures.viewModel.collection;
    element = renderWaypoint(waypoint, 'waypoints', 'learn');
  })

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('panel-content_main');
  });

  describe("on double click", ()=> {
    it("calls switchmode if level is waypoint", () => {
      React.addons.TestUtils.Simulate.doubleClick(element);
      expect(Actions.switchMode).to.be.calledWith('curate');
    });
  });

  xdescribe("on double click", ()=> {
    it("does not call switchmode if level is not waypoint", () => {
      element = renderWaypoint(waypoint, '', 'learn');
      React.addons.TestUtils.Simulate.doubleClick(element);
      expect(Actions.switchMode).not.to.be.calledWith('curate');
    });
  });
});

function renderWaypoint(model, level, mode){
  let container = TestUtils.renderIntoDocument(
    <WaypointSection level={ level } mode={ mode } model={ model }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
