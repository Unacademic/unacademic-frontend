import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ControlPanel from '../../../src/components//sidebar/controlPanel/ControlPanel.jsx';

describe.only("Control Panel", () => {
  let element;
  let { appState } = fixtures;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("render", () => {
    beforeEach(() => {
      [element] = renderPanel(appState);
    })

    it("displays the level panel", () => {
      let modeButtons = element.querySelector('.level-panel');
      expect(modeButtons).not.to.be.null;
    });

    it("displays the authentication panel", () => {
      let authenticationPanel = element.querySelector('.authentication-panel');
      expect(authenticationPanel).not.to.be.null;
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
