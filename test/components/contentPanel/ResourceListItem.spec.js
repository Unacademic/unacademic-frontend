import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ResourceListItem from '../../../src/components/contentPanel/ResourceListItem.jsx';

describe("ResourceListItem", () => {
  let element;
  let key = 1;
  let title = 'first';

  beforeEach(() => {
    testdom('<html><body></body></html>');
  });

  describe("when rendered", () => {
    beforeEach(() => {
      let container = TestUtils.renderIntoDocument(
        <ResourceListItem key={ key } title={ title } />
      );

      element = React.findDOMNode(container);
    });

    it("finds a resource item", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('resource_item');
    });
  });
});

