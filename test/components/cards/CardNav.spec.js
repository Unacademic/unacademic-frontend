import CardNav from '../../../src/components/cards/CardNav.jsx';
import Actions from '../../../src/actions/index.js';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("CardNav", () => {
  let element;
  let exploreButton;
  let selection;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    selection = { id: 1, title: 'hi', type: 'Waypoint' };
    [element, exploreButton] = renderButtons(selection);
  });

  describe("render", () => {

    it("renders the container", () => {
      expect(element.className).to.equal('card_nav');
    });

    it("renders the buttons", () => {
      let buttons = element.querySelectorAll('button');
      expect(buttons.length).to.equal(1);
    });
  });

  describe("click handling", () => {

    describe("when explore button is clicked", () => {

      beforeEach(() => {
        Actions.setLevel = sinon.spy();
        React.addons.TestUtils.Simulate.click(exploreButton);
      });

      it("calls the right action", () => {
        expect(Actions.setLevel).to.be.calledWith(selection);
      });
    });
  });
});

function renderButtons(model){
  let container = TestUtils.renderIntoDocument(
    <CardNav model={ model }/>
  );

  let element = React.findDOMNode(container);
  let exploreButton = element.querySelector('.browse');
  return [element, exploreButton];
}
