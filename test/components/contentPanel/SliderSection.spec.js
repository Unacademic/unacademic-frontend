import SliderSection from '../../../src/components/contentPanel/ContentPanel.jsx';
import { React, TestUtils, testdom } from '../../react-helpers';

describe.only("SliderSection", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("when model is resource", () => {

    beforeEach(() => {
      let container = TestUtils.renderIntoDocument(
        <SliderSection />
      );

      element = React.findDOMNode(container);
    });

    it("renders the SliderSection in the sidebar", () => {
      expect(element.className).to.contain('sliders');
    });
  });
});