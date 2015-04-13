import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ResourceSection from '../../../src/components/contentPanel/ResourceSection.jsx';

describe("Resource Section", () => {
  let element;
  let model;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let [waypoint] = fixtures.viewModel.collection;
    let [checkpoint] = waypoint.checkpoints;
    [model] = checkpoint.resources;
  })

  describe("model type is checkpoint", () => {
    beforeEach(() => {
      [element] = renderResource(model);
    })

    it("has the correct classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('panel-content_main');
      expect(classes).to.contain('panel-is-resource');
    });
  });
});


function renderResource(model){
  let container = TestUtils.renderIntoDocument(
    <ResourceSection model={ model }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
