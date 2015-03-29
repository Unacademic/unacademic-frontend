import { React, TestUtils, fixtures } from '../../react-helpers';
import ControlPanel from '../../../src/scripts/components/sidebar/controlPanel/ControlPanel.jsx';

describe("Control Panel", () => {
  let component;
  let { appState } = fixtures;

  describe("without user", () => {
    beforeEach(() => {
      component = React.renderToString(
        <ControlPanel appState={ appState }/>
      );
    })

    it("displays the signin button", () => {
      expect(component).not.to.match(/Browse/);
      expect(component).to.match(/Sign In/);
    });
  });

  describe("with user", () => {
    beforeEach(() => {
      appState.user = 'yeehaa';
      component = React.renderToString(
        <ControlPanel appState={ appState }/>
      );
    })

    it("displays the mode buttons", () => {
      expect(component).to.match(/Browse/);
      expect(component).not.to.match(/Sign In/);
    });
  });
});
