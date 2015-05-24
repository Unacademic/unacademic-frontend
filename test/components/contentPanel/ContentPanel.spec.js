import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ContentPanel from '../../../src/components/contentPanel/ContentPanel.jsx';
import Actions from '../../../src/actions/index.js';

describe("Content Panel", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("level is passed in as property", () => {
    beforeEach(() => {
      let [model] = fixtures.viewModel.collection;
      Actions.setMode = sinon.spy();
      let appState = {
        levels: { current: 'waypoint' },
        modes: { current: 'learn' }
      }
      element = renderPanel(model, appState);
    });


    it("renders the header section", () => {
      let panel = element.querySelectorAll('.panel');
      expect(panel.length).to.equal(1);
    });
  });
});

function renderPanel(model, appState){
  let container = TestUtils.renderIntoDocument(
    <ContentPanel appState={ appState } model={ model }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
