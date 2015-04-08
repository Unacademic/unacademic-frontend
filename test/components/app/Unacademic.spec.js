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
    expect(classes).to.contain('app');
  });

  it("renders the sidebar", () => {
    let sidebar = element.querySelectorAll('.sidebar');
    expect(sidebar.length).to.equal(1);
  });

  it.skip("renders the main area", () => {
    let main = element.querySelectorAll('.main');
    expect(main.length).to.equal(1);
  });
});
