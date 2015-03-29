import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import AuthenticateButton from '../../../src/scripts/components/sidebar/controlPanel/AuthenticateButton.jsx';
import Actions from '../../../src/scripts/actions/index.js';

describe("Authenticate Button", () => {
  let element;
  let button;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [element, button] = renderButton();
  })

  describe("initial render", () => {
    it("has the right class", () => {
      expect(element.className).to.equal('authenticate');
    });
  });

  describe("On Click", () => {

    beforeEach(() => {
      Actions.authenticate = sinon.spy();
      React.addons.TestUtils.Simulate.click(button);
    });

    it("should authenticate the user", () => {
      expect(Actions.authenticate).to.be.calledOnce;
    });
  });
});

function renderButton(){
  let container = TestUtils.renderIntoDocument(
    <AuthenticateButton />
  );

  let button = React.findDOMNode(container.refs.authenticateButton);
  let element = React.findDOMNode(container);
  return [element, button];
}
