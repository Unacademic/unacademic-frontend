import SliderSection from '../../../src/components/contentPanel/ContentPanel.jsx';
import { React, TestUtils, testdom } from '../../react-helpers';

describe.only("SliderSection", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("when model is resource", () => {

    beforeEach(() => {
      let criteria = {
        clarity: 1,
        difficulty: 2,
        enjoyment: 3,
        relevance: 4,
        tempholder: 5
      };
      let container = TestUtils.renderIntoDocument(
        <SliderSection criteria={ criteria }/>
      );

      element = React.findDOMNode(container);
    });

    it("renders the SliderSection in the sidebar", () => {
      expect(element.className).to.contain('sliders');
    });
  });
});