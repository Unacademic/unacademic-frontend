import Viewer from '../../../src/components/viewer/Viewer.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Viewer", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("when model is resource", () => {

    beforeEach(() => {
      let container = TestUtils.renderIntoDocument(
        <Viewer data={ { content: "<div class='viewer'></div>" } } />
      );

      element = React.findDOMNode(container);
    });

    it("renders the viewer", () => {
      expect(element.className).to.contain('viewer');
    });
  });
});