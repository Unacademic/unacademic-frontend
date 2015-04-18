import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import LevelSheet from '../../../src/components/levelStack/LevelSheet.jsx';
import Actions from '../../../src/actions/index.js';

describe("Level Sheet", () => {
  let element;
  let mode;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    mode = 'waypoints';
    element = renderSheet(mode);
  })

  it("has the right classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('stack_sheet');
  });

  describe('on click', ()=> {
    it("calls setViewModel Action", () => {
      Actions.setViewModel = sinon.spy();
      TestUtils.Simulate.click(element);
      let selection = { type: mode };
      expect(Actions.setViewModel).to.be.calledWith(selection);
    });
  });
});

function renderSheet(mode){
  let container = TestUtils.renderIntoDocument(
    <LevelSheet mode={ mode }/>
  );

  return React.findDOMNode(container);
}
