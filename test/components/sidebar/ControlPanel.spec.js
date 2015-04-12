import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ControlPanel from '../../../src/components//sidebar/controlPanel/ControlPanel.jsx';

describe("Control Panel", () => {
  let element;
  let { appState } = fixtures;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("render", () => {
    beforeEach(() => {
      [element] = renderPanel(appState);
    })

    it("has the right class on the container", () => {
      expect(element.className).to.contain('panel');
      expect(element.className).to.contain('panel-control');
      expect(element.className).to.contain('panel-bottom');
    });

    it("displays the authentication panel", () => {
      let authenticationPanel = element.querySelector('.panel-authentication');
      expect(authenticationPanel).not.to.be.null;
    });

    it("displays the history panel", () => {
      let modeButtons = element.querySelector('.panel-history');
      expect(modeButtons).not.to.be.null;
    });

    it("displays the level panel", () => {
      let modeButtons = element.querySelector('.panel-level');
      expect(modeButtons).not.to.be.null;
    });

    it("displays the mode button panel", () => {
      let modeButtons = element.querySelector('.panel-modes');
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
