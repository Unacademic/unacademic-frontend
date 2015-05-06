import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import Sidebar from '../../../src/components/sidebar/Sidebar.jsx';

describe("Sidebar", () => {
  let element;
  let { appState, viewModel } = fixtures;
  let { model } = viewModel;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("when mode is waypoints", () => {

    beforeEach(() => {
      appState.viewModel.waypoints = true;
      element = renderSidebar(model, appState);
    });

    it("has the correct classes", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('layout-sidebar');
    });

    it("renders the sidebar", () => {
      let sidebar = element.querySelector('.sidebar');
      let classes = sidebar.className.split(' ');
      expect(classes).to.contain('sidebar-is-waypoints');

    })

    it.skip("renders the LevelStack", () => {
      let stack = element.querySelectorAll('.stack');
      expect(stack.length).to.equal(1);
    });

    it("renders the content panel", () => {
      let contentPanel = element.querySelectorAll('.panel-content');
      expect(contentPanel.length).to.equal(1);
    });

    it("renders the control panel", () => {
      let controlPanel = element.querySelectorAll('.panel-control');
      expect(controlPanel.length).to.equal(1);
    });
  });

  describe("when mode is waypoint", () => {

    beforeEach(() => {
      appState.viewModel.waypoint = true;
      element = renderSidebar(model, appState);
    });

    it("has the correct classes on the sidebar", () => {
      let sidebar = element.querySelector('.sidebar');
      let classes = sidebar.className.split(' ');
      expect(classes).to.contain('sidebar-is-waypoint');
    })
  });

  describe("when mode is checkpoint", () => {

    beforeEach(() => {
      appState.viewModel.checkpoint = true;
      element = renderSidebar(model, appState);
    });

    it("has the correct classes on the sidebar", () => {
      let sidebar = element.querySelector('.sidebar');
      let classes = sidebar.className.split(' ');
      expect(classes).to.contain('sidebar-is-checkpoint');
    })
  });
});

function renderSidebar(model, appState){
  let container = TestUtils.renderIntoDocument(
    <Sidebar model={ model } appState={ appState } />
  );

  return React.findDOMNode(container);
}
