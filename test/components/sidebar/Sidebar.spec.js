import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import Sidebar from '../../../src/components/sidebar/Sidebar.jsx';

describe("Sidebar", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let { appState, viewModel } = fixtures;
    let { model } = viewModel;
    let container = TestUtils.renderIntoDocument(
      <Sidebar model={ model } appState={ appState } />
    );

    element = React.findDOMNode(container);
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
