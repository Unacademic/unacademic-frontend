import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import BreadCrumbs from '../../../src/components/breadcrumbs/BreadCrumbs.jsx';
import Actions from '../../../src/actions/index.js';

describe("BreadCrumbs", () => {
  let breadcrumbs;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("waypoints", () =>{
    beforeEach(() => {
      let view = {
        waypoints: 'all',
        waypoint: false,
        checkpoints: false
      }
      breadcrumbs = renderBreadCrumbs(view);
    });

    it("renders one breadcrumb", () => {
      expect(breadcrumbs.length).to.equal(1);
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
