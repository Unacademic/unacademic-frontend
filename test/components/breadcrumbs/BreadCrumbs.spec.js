import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import BreadCrumbs from '../../../src/components/breadcrumbs/BreadCrumbs.jsx';

describe("BreadCrumbs", () => {
  let breadcrumbs;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("waypoints", () =>{
    beforeEach(() => {
      let levels = {
        current: 'waypoint',
        waypoints: 'all',
        waypoint: false,
        checkpoints: false
      }
      breadcrumbs = renderBreadCrumbs(levels);
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

function renderBreadCrumbs(levels){
  let container = TestUtils.renderIntoDocument(
    <BreadCrumbs levels={ levels }/>
  );

  let component = React.findDOMNode(container);
  return component.querySelectorAll('.breadcrumb');
}
