import Unacademic from '../../../src/components/app/Unacademic.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Unacademic", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let { appState, viewModel } = fixtures;
    element = renderElement(viewModel, appState);
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


    describe("during browsing", ()=> {

      it("renders the topbar", () => {
        let topbar = main[0].querySelectorAll('.layout-topbar');
        expect(topbar.length).to.equal(1);
      });

      it("renders the content area", () => {
        let content = main[0].querySelectorAll('.layout-content');
        expect(content.length).to.equal(1);
      });


      it("does not render the introduction component", () => {
        let introduction = main[0].querySelectorAll('.introduction');
        expect(introduction.length).to.equal(0);
      });
    });

    describe("during browsing", ()=> {

      beforeEach(() => {
        testdom('<html><body></body></html>');
        let { appState, viewModel } = fixtures;
        appState.levels.current = 'introduction';
        element = renderElement(viewModel, appState);
        main = element.querySelectorAll('.layout-main');
      });

      it("does not render the topbar", () => {
        let topbar = main[0].querySelectorAll('.layout-topbar');
        expect(topbar.length).to.equal(0);
      });

      it("does not render the content area", () => {
        let content = main[0].querySelectorAll('.layout-content');
        expect(content.length).to.equal(0);
      });


      it("renders the introduction component", () => {
        let introduction = main[0].querySelectorAll('.introduction');
        expect(introduction.length).to.equal(1);
      });
    });
  });
});

function renderElement(viewModel, appState){
  let container = TestUtils.renderIntoDocument(
    <Unacademic viewModel={ viewModel } appState={ appState } />
  );

  return React.findDOMNode(container);
}
