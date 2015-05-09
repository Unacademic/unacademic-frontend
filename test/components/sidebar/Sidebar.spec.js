import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import Sidebar from '../../../src/components/sidebar/Sidebar.jsx';

describe("Sidebar", () => {
  let element;
  let { appState, viewModel } = fixtures;
  let { model } = viewModel;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    appState.levels.current = 'waypoints';
    element = renderSidebar(model, appState);
  });

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('layout-sidebar');
  });

  it("renders the sidebar", () => {
    let sidebar = element.querySelectorAll('.sidebar');
    expect(sidebar.length).to.equal(1);
  })

  it("renders the content panel", () => {
    let contentPanel = element.querySelectorAll('.panel-content');
    expect(contentPanel.length).to.equal(1);
  });

  it("renders the control panel", () => {
    let controlPanel = element.querySelectorAll('.panel-control');
    expect(controlPanel.length).to.equal(1);
  });
});

function renderSidebar(model, appState){
  let container = TestUtils.renderIntoDocument(
    <Sidebar model={ model } appState={ appState } />
  );

  return React.findDOMNode(container);
}
