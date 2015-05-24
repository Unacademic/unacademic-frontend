import SliderSection from '../../../src/components/sliders/SliderSection.jsx';
import { React, TestUtils, testdom } from '../../react-helpers';

describe("SliderSection", () => {
  let element;
  let criteria = {
    clarity: 1,
    difficulty: 2,
    enjoyment: 3,
    relevance: 4,
    tempholder: 5
  };

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("when model is resource", () => {

    beforeEach(() => {

      let container = TestUtils.renderIntoDocument(
        <SliderSection criteria={ criteria }/>
      );

      element = React.findDOMNode(container);
    });

    it("renders the SliderSection in the sidebar", () => {
      expect(element.className).to.contain('sliders-container');
    });

    it("renders the correct value for clarity", () => {
      let el = element.querySelector('input[name="clarity"]');
      expect(el.value).to.equal('1');
    });

    it("renders the correct value for difficulty", () => {
      let el = element.querySelector('input[name="difficulty"]');
      expect(el.value).to.equal('2');
    });

    it("renders the correct value for enjoyment", () => {
      let el = element.querySelector('input[name="enjoyment"]');
      expect(el.value).to.equal('3');
    });

    it("renders the correct value for relevance", () => {
      let el = element.querySelector('input[name="relevance"]');
      expect(el.value).to.equal('4');
    });

    it("renders the correct value for tempholder", () => {
      let el = element.querySelector('input[name="tempholder"]');
      expect(el.value).to.equal('5');
    });

    it("updates the state")
  });
});
