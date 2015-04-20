import Cards from '../../../src/components/cards/Cards.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Cards", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let { collection } = fixtures.viewModel;
    let container = TestUtils.renderIntoDocument(
      <Cards collection={ collection } />
    );

    element = React.findDOMNode(container);
  });


  it("renders the container", () => {
    expect(element.className).to.equal('cards');
  });

  it("renders the cards", () => {
    let cards = element.querySelectorAll('.card');
    expect(cards.length).to.equal(2);
  });

});
