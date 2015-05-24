import Card from '../../../src/components/cards/Card.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Card", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("when model is waypoint", () => {

    beforeEach(() => {
      let [model] = fixtures.viewModel.collection;
      element = renderCard(model);

    });

    it("renders the container", () => {
      expect(element.className).to.contain('card');
    });
  });
});

function renderCard(model){
  let container = TestUtils.renderIntoDocument(
    <Card model={ model } />
  );

  return React.findDOMNode(container);
}
