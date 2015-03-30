import { React, TestUtils, fixtures } from '../../react-helpers';
import ControlPanel from '../../../src/components//sidebar/controlPanel/ControlPanel.jsx';

describe("Control Panel", () => {
  let container;
  let { appState } = fixtures;

  describe("without user", () => {
    beforeEach(() => {
      container = renderElement(appState);
    })

    it("displays the signin button", () => {
      expect(container).not.to.match(/Browse/);
      expect(container).to.match(/Sign In/);
    });
  });

  describe("with user", () => {
    beforeEach(() => {
      appState.user = 'yeehaa';
      container = React.renderToString(
        <ControlPanel appState={ appState }/>
      );
    })

    it("displays the mode buttons", () => {
      expect(container).to.match(/Browse/);
      expect(container).not.to.match(/Sign In/);
    });
  });
});

function renderElement(appState){
  return React.renderToString(
    <ControlPanel appState={ appState }/>
  );
}
