import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import LevelStack from '../../../src/components/levelStack/LevelStack.jsx';
import Actions from '../../../src/actions/index.js';

describe.only("Mode logo", () => {
  let stack;
  let waypointButton;
  let waypointsButton;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("when mode is learn", () => {

    beforeEach(() => {
      let { viewModel } = fixtures.appState;
      stack = renderStack(viewModel);
    })

    it("has the right classes", () => {
      let classes = stack.className.split(' ');
      expect(classes).to.contain('layout-levels');
    });

  });
});

function renderStack(viewModel){
  let container = TestUtils.renderIntoDocument(
    <LevelStack viewModel={ viewModel }/>
  );

  return React.findDOMNode(container);
}
