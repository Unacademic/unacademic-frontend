import CardWaypoint from '../../../src/components/cards/CardWaypoint.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("CardWaypoint", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let [model] = fixtures.viewModel.collection;
    let container = TestUtils.renderIntoDocument(
      <CardWaypoint model={ model } />
    );

    element = React.findDOMNode(container);
  });

  it("renders the container", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('card');
    expect(classes).to.contain('card-waypoint');
  });

  it("renders the cardButtons", () => {
    let cardButtons = element.querySelectorAll('.cardNav');
    expect(cardButtons.length).to.equal(1);
  });

});
