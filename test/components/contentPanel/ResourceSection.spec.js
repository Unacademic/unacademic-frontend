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
      element = renderResource(model, 'sidebar');
    })

    it("renders the header", () => {
      let query = element.querySelectorAll('.panel-content_header');
      expect(query.length).to.equal(1);
    });

    it("renders the header", () => {
      let query = element.querySelectorAll('.panel-content_main');
      expect(query.length).to.equal(1);
    });

    it("renders the sliders", () => {
        let query = element.querySelectorAll('.sliders-container');
      expect(query.length).to.equal(1);
    });
  });
});


function renderResource(model, context){
  let container = TestUtils.renderIntoDocument(
    <ResourceSection context={ context }model={ model }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
