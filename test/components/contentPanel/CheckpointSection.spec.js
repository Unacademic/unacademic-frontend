import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import CheckpointSection from '../../../src/components/contentPanel/CheckpointSection.jsx';

describe("Checkpoint Section", () => {
  let element;
  let model;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let [waypoint] = fixtures.viewModel.collection;
    [model] = waypoint.checkpoints;
  })

  describe("model type is checkpoint", () => {
    beforeEach(() => {
      [element] = renderCheckpoint(model);
    })

    it("has the correct classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('panel-content_main');
    });
  });
});

function renderCheckpoint(model){
  let container = TestUtils.renderIntoDocument(
    <CheckpointSection model={ model }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
