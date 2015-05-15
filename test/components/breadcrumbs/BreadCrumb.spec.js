import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import BreadCrumb from '../../../src/components/breadcrumbs/BreadCrumb.jsx';
import Actions from '../../../src/actions/index.js';

describe("BreadCrumb", () => {
  let breadcrumb;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("if current mode", () =>{
    let classes;

    beforeEach(() => {
      let layer = ['waypoints', { id: 1 }];
      breadcrumb = renderBreadCrumb(layer, 'waypoints');
      classes = breadcrumb.className.split(" ");
    });

    it("has the breadcrumb class on it", () => {
      expect(classes).to.contain("breadcrumb");
    });

    it("has the correct title", () => {
      expect(breadcrumb.textContent).to.equal("Home");
    });

    it("has an active class on it", () => {
      expect(classes).to.contain("breadcrumb");
      expect(classes).to.contain("breadcrumb-is-active");
    });
  });

  describe("if not current mode", () =>{
    let classes;

    beforeEach(() => {
      let layer = ['waypoints', 'all'];
      breadcrumb = renderBreadCrumb(layer, 'waypoint');
    });

    it("has an active class on it", () => {
      classes = breadcrumb.className.split(" ");
      expect(classes).not.to.contain("breadcrumb-is-active");
    });
  });

  describe('on click', ()=> {
    it("calls setViewModel Action", () => {
      let layer = ['waypoints', { id: 1, title: 'hi' }];
      breadcrumb = renderBreadCrumb(layer, 'waypoints');
      Actions.setLevel = sinon.spy();
      TestUtils.Simulate.click(breadcrumb);
      let selection = { id: 1, title: 'hi', type: 'waypoints' };
      expect(Actions.setLevel).to.be.calledWith(selection);
    });
  });
});

function renderBreadCrumb(level, currentMode){
  let container = TestUtils.renderIntoDocument(
      <BreadCrumb level={ level } currentMode={ currentMode }/>
  );

  return React.findDOMNode(container);
}
