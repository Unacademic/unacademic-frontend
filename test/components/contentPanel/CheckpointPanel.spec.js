import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import CheckpointPanel from '../../../src/components/contentPanel/CheckpointPanel.jsx';
import Actions from '../../../src/actions/index.js';

describe("Checkpoint Panel", () => {
  let element;
  let model;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let [waypoint] = fixtures.viewModel.collection;
    [model] = waypoint.checkpoints;
  })

  describe("model type is checkpoint", () => {
    beforeEach(() => {
      [element] = renderCheckpoint(model, 'card');
    })

    it("has the correct classes", () => {
      let mainPanel = element.querySelectorAll('.panel_main');
      expect(mainPanel.length).to.equal(1);
    });

    it("checks complete when an item is clicked", ()=> {
      let todoItem = element.querySelectorAll('.todolist_item .checkbox')[0];
      Actions.toggleComplete = sinon.spy();
      TestUtils.Simulate.click(todoItem);
      let checkpoint = { id: 1 };
      let resource = { id: 1 };
      let selection = { checkpoint, resource };
      expect(Actions.toggleComplete).to.be.calledWith(selection);
    });

    it("selects a level when an item title is clicked", ()=> {
        let todoItem = element.querySelectorAll('.todolist_item .title-resource')[0];
        Actions.setLevel = sinon.spy();
        Actions.setHighlight = sinon.spy();
        TestUtils.Simulate.click(todoItem);
        let checkpoint = { id: 1 };
        let resource = { id: 1 };
        let selection = { checkpoint, resource };
        expect(Actions.toggleComplete).to.be.calledWith(selection);
        expect(Actions.setHighlight).to.be.calledWith(selection, false);
        });

    it("adds highlight on a mouse enter", ()=> {
      let todoItem = element.querySelectorAll('.todolist_item')[0];
      Actions.setHighlight = sinon.spy();
      TestUtils.Simulate.mouseOver(todoItem);
      let checkpoint = { id: 1 };
      let resource = { id: 1 };
      let selection = { checkpoint, resource };
      expect(Actions.setHighlight).to.be.calledWith(selection, true, 'card');
    });
  });
});

function renderCheckpoint(model, context){
  let container = TestUtils.renderIntoDocument(
    <CheckpointPanel context={ context } model={ model }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
