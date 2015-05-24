import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ResourceList from '../../../src/components/contentPanel/ResourceList.jsx';

describe("ResourceList", () => {
  let element;
  let resources = [ { title: 'first', id: 1 }, { title: 'second', id: 2 } ];

  beforeEach(() => {
    testdom('<html><body></body></html>');
  });

  describe.only("model type is checkpoint", () => {
    beforeEach(() => {
      let container = TestUtils.renderIntoDocument(
        <ResourceList resources={ resources } />
      );

      element = React.findDOMNode(container);
      // console.log('element', element);
    });

    it("renders the resourceList section", () => {
      let query = element.querySelectorAll('.resourceList');
      // console.log('query', query);
      expect(query.length).to.equal(1);
    });
  });
});

