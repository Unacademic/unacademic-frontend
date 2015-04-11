import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import AuthenticateButton from '../../../src/components/sidebar/controlPanel/AuthenticateButton.jsx';
import Actions from '../../../src/actions/index.js';

describe("Authenticate Button", () => {
  let element;
  let button;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [element, button] = renderButton();
  })

  describe("initial render", () => {
    it("has the right class", () => {
      expect(element.className).to.equal('authentication-panel');
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

  let element = React.findDOMNode(container);
  let button = element.querySelector('.btn-authentication')
  return [element, button];
}
