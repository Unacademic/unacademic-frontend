import Unacademic from '../../../src/components/app/Unacademic.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Unacademic", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let { appState, viewModel } = fixtures;
    let container = TestUtils.renderIntoDocument(
      <Unacademic viewModel={ viewModel } appState={ appState } />
    );

    element = React.findDOMNode(container);
  });


  it("renders the container", () => {
    let classes = element.className.split(" ");
    expect(classes).to.contain('layout-app');
  });

  it("renders the sidebar", () => {
    let sidebar = element.querySelectorAll('.layout-sidebar');
    expect(sidebar.length).to.equal(1);
  });

  it("renders the main area", () => {
    let main = element.querySelectorAll('.layout-main');
    expect(main.length).to.equal(1);
  });
});
