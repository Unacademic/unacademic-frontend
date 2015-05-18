import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import Sidebar from '../../../src/components/sidebar/Sidebar.jsx';
import Actions from '../../../src/actions/index.js';

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

  it("toggles mode on doubleClick", () => {
    Actions.toggleMode = sinon.spy();
    React.addons.TestUtils.Simulate.doubleClick(element);
    expect(Actions.toggleMode).to.be.called;
  });
});

function renderSidebar(model, appState){
  let container = TestUtils.renderIntoDocument(
    <Sidebar model={ model } appState={ appState } />
  );

  return React.findDOMNode(container);
}
