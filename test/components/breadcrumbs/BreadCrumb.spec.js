import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import BreadCrumbs from '../../../src/components/breadcrumbs/BreadCrumbs.jsx';
import Actions from '../../../src/actions/index.js';

describe.only("BreadCrumbs", () => {
  let breadcrumbs;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("waypoints", () =>{
    beforeEach(() => {
      let view = {
        waypoints: 'all'
      }
      breadcrumbs = renderBreadCrumbs(view);
    });

    it("renders one breadcrumb", () => {
      expect(breadcrumbs.length).to.equal(1);
    });

    it("has an active class on it", () => {
      let classes = breadcrumbs[breadcrumbs.length - 1].className.split(" ");
      expect(classes).to.contain("breadcrumb-is-active");
    });
  });

  describe("waypoint", () =>{
    it("renders two breadcrumbs", () => {
      let view = {
        waypoints: 'all',
        waypoint: '1'
      }
      breadcrumbs = renderBreadCrumbs(view);
      expect(breadcrumbs.length).to.equal(2);
    });

    it("has an active class on the last crumb", () => {
      let classes = breadcrumbs[breadcrumbs.length - 1].className.split(" ");
      expect(classes).to.contain("breadcrumb-is-active");
    });

    it("does not have an active class on the other", () => {
      let classes = breadcrumbs[0].className.split(" ");
      expect(classes).not.to.contain("breadcrumb-is-active");
    });
  });

  describe("checkpoint", () =>{
    it("renders three breadcrumbs", () => {
      let view = {
        waypoints: 'all',
        waypoint: '1',
        checkpoint: '12'
      }
      breadcrumbs = renderBreadCrumbs(view);
      expect(breadcrumbs.length).to.equal(3);
    });
  });
});

function renderBreadCrumbs(view){
  let container = TestUtils.renderIntoDocument(
    <BreadCrumbs view={ view }/>
  );

  let component = React.findDOMNode(container);
  return component.querySelectorAll('.breadcrumb');
}
