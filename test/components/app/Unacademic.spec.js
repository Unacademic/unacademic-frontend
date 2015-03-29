import Unacademic from '../../../src/scripts/components/app/Unacademic.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Unacademic", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let { appState, model } = fixtures;
    let container = TestUtils.renderIntoDocument(
      <Unacademic model={ model } appState={ appState } />
    );

    element = React.findDOMNode(container);
  });


  it("renders the container", () => {
    expect(element.className).to.equal('app');
  });

  it("renders the sidebar", () => {
    let sidebar = element.querySelectorAll('.sidebar');
    expect(sidebar.length).to.equal(1);
  });

  it("renders the main area", () => {
    let main = element.querySelectorAll('.main');
    expect(main.length).to.equal(1);
  });
});
