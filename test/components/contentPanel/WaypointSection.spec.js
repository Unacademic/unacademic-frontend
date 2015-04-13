import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import WaypointSection from '../../../src/components/contentPanel/WaypointSection.jsx';

describe("Waypoint Section", () => {
  let element;
  let waypoint;
  let checkpoint;
  let resource;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [waypoint] = fixtures.viewModel.collection;
    [checkpoint] = waypoint.checkpoints;
    [resource] = checkpoint.resources;
  })

  describe("model type is waypoint", () => {
    beforeEach(() => {
      let model = waypoint;
      [element] = renderWaypoint(model);
    })

    it("has the correct classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('panel-content_main');
      expect(classes).to.contain('panel-is-waypoint');
    });
  });

  xdescribe("model type is checkpoint", () => {
    beforeEach(() => {
      let model = checkpoint;;
      [element] = renderWaypoint(model);
    })

    it("has the correct classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('panel-content_main');
    });
  });

  xdescribe("model type is resource", () => {
    beforeEach(() => {
      let model = resource;
      [element] = renderWaypoint(model);
    })

    it("has the correct classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('panel-content_main');
    });
  });
});


function renderWaypoint(model){
  let container = TestUtils.renderIntoDocument(
    <WaypointSection model={ model }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
