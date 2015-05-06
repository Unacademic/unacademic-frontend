import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import BreadCrumbs from '../../../src/components/breadcrumbs/BreadCrumbs.jsx';
import Actions from '../../../src/actions/index.js';

describe("BreadCrumbs", () => {
  let breadcrumbs;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    breadcrumbs = renderBreadCrumbs();
  })

  it("it should render", () => {
    expect(breadcrumbs).not.to.be.undefined;
  });

});

function renderBreadCrumbs(modes){
  let container = TestUtils.renderIntoDocument(
    <BreadCrumbs />
  );

  return React.findDOMNode(container);
}
