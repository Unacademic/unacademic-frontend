import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ContentPanel from '../../../src/components/sidebar/ContentPanel.jsx';
import Actions from '../../../src/actions/index.js';

describe("Content Panel", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("model type is waypoints", () => {

    beforeEach(() => {
      let { model } = fixtures.viewModel;
      model.type = 'waypoints';
      [element] = renderPanel(model);
    });

    it("has the right class on the container", () => {
      expect(element.className).to.equal('contentPanel');
    });

    it("has a title", () => {
      let title = element.querySelector('h1').textContent;
      expect(title).to.equal('_Unacademic');
    });

  });
});

function renderPanel(model){
  let container = TestUtils.renderIntoDocument(
    <ContentPanel model={ model }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
