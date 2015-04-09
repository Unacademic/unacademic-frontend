import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ControlPanel from '../../../src/components//sidebar/controlPanel/ControlPanel.jsx';

describe("Control Panel", () => {
  let element;
  let { appState } = fixtures;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("without user", () => {
    beforeEach(() => {
      [element] = renderPanel(appState);
    })

    it("displays the authentication panel", () => {
      let authenticationPanel = element.querySelector('.authentication-panel');
      expect(authenticationPanel).not.to.be.null;
    });

    it("does not display the mode button panel", () => {
      let modeButtons = element.querySelector('.mode-buttons');
      expect(modeButtons).to.be.null;
    });
  });

  describe("with user", () => {
    beforeEach(() => {
      appState.user = 'yeehaa';
      [element] = renderPanel(appState);
    });

    it("does not display the authentication panel", () => {
      let authenticationPanel = element.querySelector('.authentication-panel');
      expect(authenticationPanel).to.be.null;
    });

    it("displays the mode button panel", () => {
      let modeButtons = element.querySelector('.mode-buttons');
      expect(modeButtons).not.to.be.null;
    });

  });
});

function renderPanel(appState){
  let container =  TestUtils.renderIntoDocument(
    <ControlPanel appState={ appState }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
