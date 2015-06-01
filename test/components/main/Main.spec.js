import Main from '../../../src/components/main/Main.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Main", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let { appState, viewModel } = fixtures;
    element = renderElement(viewModel, appState);
  });

  describe("topbar area", ()=> {
    let topbar;

    it("renders the container", () => {
      topbar = element.querySelectorAll('.layout-topbar');
      expect(topbar.length).to.equal(1);
    });

    it("renders the breadcrumbs component", () => {
      let breadcrumbs = topbar[0].querySelectorAll('.breadcrumbs');
      expect(breadcrumbs.length).to.equal(1);
    });

    it("renders the login button", () => {
      let breadcrumbs = topbar[0].querySelectorAll('.login');
      expect(breadcrumbs.length).to.equal(1);
    });
  });

  describe("content area", ()=> {
    let content;

    it("renders the container", () => {
      content = element .querySelectorAll('.layout-content');
      expect(content.length).to.equal(1);
    });

    it("renders the cards component", () => {
      let cards = content[0].querySelectorAll('.cards');
      expect(cards.length).to.equal(1);
    });

    it("does not render the start component", () => {
      let cards = content[0].querySelectorAll('.cards');
      expect(cards.length).to.equal(1);
    });
  });
});

function renderElement(viewModel, appState){
  let container = TestUtils.renderIntoDocument(
    <Main viewModel={ viewModel } appState={ appState } />
  );

  return React.findDOMNode(container);
}
