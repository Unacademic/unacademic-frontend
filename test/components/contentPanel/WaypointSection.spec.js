import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import WaypointSection from '../../../src/components/contentPanel/WaypointSection.jsx';

describe("Waypoint Section", () => {
  let element;
  let waypoint;
  let checkpoint;
  let resource;

  describe("context is sidebar", () => {
      beforeEach(() => {
        testdom('<html><body></body></html>');
        [waypoint] = fixtures.viewModel.collection;
        element = renderWaypoint(waypoint, 'waypoints', 'learn', 'sidebar');
      })

      it("has the correct classes", () => {
        let classes = element.className.split(' ');
        expect(classes).to.contain('panel-content_main');
      });

      it("shows the description", () => {
        let description = element.querySelectorAll('.description');
        expect(description.length).to.equal(1)
      });

      it("hides the checkpoints", () => {
        let checkpoints = element.querySelectorAll('.checkpoint');
        expect(checkpoints.length).to.equal(0)
      });
  });

  describe("context is card", () => {
      beforeEach(() => {
        testdom('<html><body></body></html>');
        [waypoint] = fixtures.viewModel.collection;
        element = renderWaypoint(waypoint, 'waypoints', 'learn', 'card');
      })

      it("has the correct classes", () => {
        let classes = element.className.split(' ');
        expect(classes).to.contain('panel-content_main');
      });

      it("hides the description", () => {
        let description = element.querySelectorAll('.description');
        expect(description.length).to.equal(0);
      });

      it("shows the checkpoints", () => {
        let todo = element.querySelectorAll('.todolist');
        expect(todo.length).to.equal(1)
      });
  });
});

function renderWaypoint(model, level, mode, context){
  let container = TestUtils.renderIntoDocument(
      <WaypointSection level={ level } mode={ mode } model={ model } context={ context }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
