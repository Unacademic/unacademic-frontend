import Slider from '../../../src/components/sliders/Slider.jsx';
import { React, TestUtils, testdom } from '../../react-helpers';

describe("Slider", () => {
  let element;
  let fieldName;
  let cb;


  beforeEach(() => {
    testdom('<html><body></body></html>');
  });

  describe("when model is resource", () => {

    beforeEach(() => {
      fieldName = 'clarity';
      cb = sinon.spy();
      element = renderSlider(fieldName, 1, cb);
    });

    it("renders the SliderSection in the sidebar", () => {
      expect(element.className).to.contain('slider');
    });

    it("renders the correct value for clarity", () => {
      let el = element.querySelector('input[name="clarity"]');
      expect(el.value).to.equal('1');
    });

    describe("handle change", ()=> {
      it('triggers the callback', () => {
        let input = element.querySelector('input[name="clarity"]');
        TestUtils.Simulate.change(input, { target: { value: 2 } });
        expect(cb).to.be.calledWith(fieldName, 2);
      });
    });
  });
});

function renderSlider(fieldName, value, cb){
  let container = TestUtils.renderIntoDocument(
    <Slider handleChange={ cb } fieldName={ fieldName } value={ value }/>
  );

  return React.findDOMNode(container);
}
