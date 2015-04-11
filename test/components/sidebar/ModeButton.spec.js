import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ModeButton from '../../../src/components/sidebar/controlPanel/ModeButton.jsx';
import Actions from '../../../src/actions/index.js';

describe("Mode Button", () => {
  let button;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    Actions.switchMode = sinon.spy();
  })

  describe("when button is not active", () => {

    beforeEach(() => {
      button = renderButton('browse', 'disabled');
    })

    it("has no class of active", () => {
      expect(button.className).to.contain('btn');
      expect(button.className).not.to.contain('btn-is-active');
    });

  });

  describe("when button is active", () => {

    beforeEach(() => {
      button = renderButton('browse', 'active');
    })

    it("has no class of active", () => {
      expect(button.className).to.contain('btn');
      expect(button.className).to.contain('btn-is-active');
    });
  });

  describe("when button is clicked", () => {

    beforeEach(() => {
      button = renderButton('browse', 'browse');
      React.addons.TestUtils.Simulate.click(button);
    });

    it("should authenticate the user", () => {
      expect(Actions.switchMode).to.be.calledOnce;
    });
  });
});

function renderButton(name, status){
  let container = TestUtils.renderIntoDocument(
    <ModeButton status={ status } name={ name }/>
  );

  return React.findDOMNode(container.refs.browseButton);
}
