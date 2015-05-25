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

  it("renders the container with the correct classes", () => {
    let classes = element.className.split(" ");
    expect(classes).to.contain('app');
    expect(classes).to.contain('app-is-learn');
    expect(classes).to.contain('app-is-waypoints');
  });

  describe("left sidebar", () => {
    it("renders the container", () => {
      let container = element.querySelectorAll('.layout-sidebar.layout-sidebar-left');
      expect(container.length).to.equal(1);
    });

    it("renders the sidebar component", () => {
      let sidebar = element.querySelectorAll('.sidebar');
      expect(sidebar.length).to.equal(1);
    });
  });

  describe("main area", ()=> {
    let main;

    it("renders the container", () => {
      main = element.querySelectorAll('.layout-main');
      expect(main.length).to.equal(1);
    });


    describe("topbar area", ()=> {
      let topbar;

      it("renders the container", () => {
        topbar = main[0].querySelectorAll('.layout-topbar');
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
        content = main[0].querySelectorAll('.layout-content');
        expect(content.length).to.equal(1);
      });

      it("renders the cards component", () => {
        let cards = content[0].querySelectorAll('.cards');
        expect(cards.length).to.equal(1);
      });
    });

  });
});
