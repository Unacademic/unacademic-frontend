import Card from '../../../src/components/cards/Card.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Card", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let { collection } = fixtures.model;
    let [model] = collection;
    let container = TestUtils.renderIntoDocument(
      <Card model={ model } />
    );

    element = React.findDOMNode(container);
  });

  it("renders the container", () => {
    expect(element.className).to.equal('card');
  });

  it("renders the cardButtons", () => {
    let cardButtons = element.querySelectorAll('.cardNav');
    expect(cardButtons.length).to.equal(1);
  });

});
