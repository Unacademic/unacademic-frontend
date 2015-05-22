import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import CheckpointSection from '../../../src/components/contentPanel/CheckpointSection.jsx';
import Actions from '../../../src/actions/index.js';

describe("Checkpoint Section", () => {
  let element;
  let model;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let [waypoint] = fixtures.viewModel.collection;
    [model] = waypoint.checkpoints;
  })

  describe("model type is checkpoint", () => {
    beforeEach(() => {
      [element] = renderCheckpoint(model);
    })

    it("has the correct classes", () => {
      let mainPanel = element.querySelectorAll('.panel-content_main');
      expect(mainPanel.length).to.equal(1);
    });

    it("checks complete when an item is clicked", ()=> {
      let todoItem = element.querySelectorAll('.todo')[0];
      Actions.toggleComplete = sinon.spy();
      TestUtils.Simulate.click(todoItem);
      let waypoint = { id: 1 };
      let checkpoint = { id: 1 };
      expect(Actions.toggleComplete).to.be.called;
    });

    it.only("adds highlight on a mouse enter", ()=> {
      let todoItem = element.querySelectorAll('.todolist_item')[0];
      Actions.setHighlight = sinon.spy();
      TestUtils.Simulate.mouseOver(todoItem);
      let checkpoint = { id: 1 };
      let resource = { id: 1 };
      expect(Actions.setHighlight).to.be.calledWith({ checkpoint, resource }, true)
    });
  });
});

function renderCheckpoint(model){
  let container = TestUtils.renderIntoDocument(
    <CheckpointSection model={ model }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
