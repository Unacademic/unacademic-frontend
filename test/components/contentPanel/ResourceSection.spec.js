import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ResourceSection from '../../../src/components/contentPanel/ResourceSection.jsx';
import Actions from '../../../src/actions/index.js';

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
      let query = element.querySelectorAll('.panel_header');
      expect(query.length).to.equal(1);
    });

    it("renders the header", () => {
      let query = element.querySelectorAll('.panel_main');
      expect(query.length).to.equal(1);
    });

    it("renders the sliders", () => {
        let query = element.querySelectorAll('.sliders-container');
      expect(query.length).to.equal(1);
    });

    it("updates the criteria on change", () => {
      let property = { 'interesting': 2 };
      let resource = { id: 1 };
      Actions.updateCriteria = sinon.spy();
      let input = element.querySelector('input[name="interesting"]');
      TestUtils.Simulate.change(input, { target: { value: 2 } });
      expect(Actions.updateCriteria).to.be.calledWith({ resource, property })
    });
  });
});

function renderResource(model, context){
  let container = TestUtils.renderIntoDocument(
    <ResourceSection context={ context } model={ model }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
