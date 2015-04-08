import CardCheckpoint from '../../../src/components/cards/CardCheckpoint.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("CardCheckpoint", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let [model] = fixtures.viewModel.collection;
    let container = TestUtils.renderIntoDocument(
      <CardCheckpoint model={ model } />
    );

    element = React.findDOMNode(container);
  });

  it("renders the container", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('card');
    expect(classes).to.contain('card-checkpoint');
  });

  it("renders no cardButtons", () => {
    let cardButtons = element.querySelectorAll('.cardNav');
    expect(cardButtons.length).to.equal(0);
  });

});
