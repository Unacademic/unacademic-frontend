import CardNav from '../../../src/components/cards/CardNav.jsx';
import Actions from '../../../src/actions/index.js';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("CardNav", () => {
  let element;
  let exploreButton;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [element, exploreButton] = renderButtons();
  });

  describe("render", () => {

    it("renders the container", () => {
      expect(element.className).to.equal('cardNav');
    });

    it("renders the buttons", () => {
      let buttons = element.querySelectorAll('button');
      expect(buttons.length).to.equal(1);
    });
  });

  describe("click handling", () => {

    describe("when explore button is clicked", () => {

      beforeEach(() => {
        Actions.browseModel = sinon.spy();
        React.addons.TestUtils.Simulate.click(exploreButton);
      });

      it("calls the right action", () => {
        expect(Actions.browseModel).to.be.calledWith({ id: 1 });
      });
    });
  });
});

function renderButtons(isEarliest, isLatest){
  let container = TestUtils.renderIntoDocument(
    <CardNav id={ 1 }/>
  );

  let element = React.findDOMNode(container);
  let exploreButton = element.querySelector('.browse');
  return [element, exploreButton];
}
