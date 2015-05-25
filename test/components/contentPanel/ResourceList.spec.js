import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ResourceList from '../../../src/components/contentPanel/ResourceList.jsx';

describe("ResourceList", () => {
  let element;
  let resources = [ { title: 'first', id: 1 }, { title: 'second', id: 2 } ];

  beforeEach(() => {
    testdom('<html><body></body></html>');
  });

  describe("model type is checkpoint", () => {
    beforeEach(() => {
      let container = TestUtils.renderIntoDocument(
        <ResourceList resources={ resources } />
      );

      element = React.findDOMNode(container);
    });

    it("renders the resourceList section", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('resourcelist');
    });

    it("has a list of resource items", () => {
      let query = element.querySelectorAll('.resource_item');
      expect(query.length).to.equal(2);
    });
  });
});
