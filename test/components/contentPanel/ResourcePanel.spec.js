import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ResourcePanel from '../../../src/components/contentPanel/ResourcePanel.jsx';
import Actions from '../../../src/actions/index.js';

describe("Resource Panel", () => {
  let element;
  let model;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let [waypoint] = fixtures.viewModel.collection;
    let [checkpoint] = waypoint.checkpoints;
    [model] = checkpoint.resources;
  })

  describe("context is sidebar", () => {
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
      let property = { 'clarity': 2 };
      let resource = { id: 1 };
      Actions.updateCriteria = sinon.spy();
      let input = element.querySelector('input[name="clarity"]');
      TestUtils.Simulate.change(input, { target: { value: 2 } });
      expect(Actions.updateCriteria).to.be.calledWith({ resource, property })
    });
  });

  describe("context is cards", () => {
    beforeEach(() => {
      element = renderResource(model, 'cards');
    })

    it("does not render the sliders", () => {
      let query = element.querySelectorAll('.sliders-container');
      expect(query.length).to.equal(0);
    });
  });
});

function renderResource(model, context){
  let container = TestUtils.renderIntoDocument(
    <ResourcePanel context={ context } model={ model }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
