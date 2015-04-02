import Card from '../../../src/components/cards/Card.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe.only("Card", () => {
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
});
