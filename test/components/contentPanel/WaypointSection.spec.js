import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import WaypointSection from '../../../src/components/contentPanel/WaypointSection.jsx';

describe.only("Waypoint Section", () => {
  let element;
  let waypoint;
  let checkpoint;
  let resource;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [waypoint] = fixtures.viewModel.collection;
    element = renderWaypoint(waypoint);
  })

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('panel-content_main');
    expect(classes).to.contain('panel-is-waypoint');
  });
});


function renderWaypoint(model){
  let container = TestUtils.renderIntoDocument(
    <WaypointSection model={ model }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
