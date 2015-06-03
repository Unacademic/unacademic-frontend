import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import WaypointPanel from '../../../src/components/contentPanel/WaypointPanel.jsx';
import Actions from '../../../src/actions/index.js';

describe("Waypoint Panel", () => {
  let element;
  let waypoint;
  let checkpoint;
  let resource;

  describe("general", ()=> {

    beforeEach(() => {
      testdom('<html><body></body></html>');
      [waypoint] = fixtures.viewModel.collection;
      element = renderWaypoint(waypoint, 'waypoints', 'learn', 'sidebar');
    })

    it("has the correct classes", () => {
      let mainPanel = element.querySelectorAll('.panel_main');
      expect(mainPanel.length).to.equal(1);
    });

    describe("context is sidebar", () => {
      it("shows the description section", () => {
        let description = element.querySelectorAll('.description');
        expect(description.length).to.equal(1)
      });


      it("hides the checkpoints", () => {
        let checkpoints = element.querySelectorAll('.checkpoint');
        expect(checkpoints.length).to.equal(0)
      });
    });

    describe("context is card", () => {
      beforeEach(() => {
        [waypoint] = fixtures.viewModel.collection;
        element = renderWaypoint(waypoint, 'waypoints', 'learn', 'card');
      })

      it("hides the description section", () => {
        let description = element.querySelectorAll('.description');
        expect(description.length).to.equal(0)
      });

      it("shows the checkpoints", () => {
        let todo = element.querySelectorAll('.todolist');
        expect(todo.length).to.equal(1)
      });

      describe("event handling", ()=> {
        it("checks complete when an item checkbox is clicked", ()=> {
          let todoItem = element.querySelectorAll('.todolist_item .checkbox')[0];
          Actions.toggleComplete = sinon.spy();
          TestUtils.Simulate.click(todoItem);
          let waypoint = { id: 1 };
          let checkpoint = { id: 1 };
          expect(Actions.toggleComplete).to.be.calledWith({ waypoint, checkpoint })
        });

        it("selects a level when an item title is clicked", ()=> {
          let todoItem = element.querySelectorAll('.todolist_item .title-resource')[0];
          Actions.setLevel = sinon.spy();
          Actions.setHighlight = sinon.spy();
          TestUtils.Simulate.click(todoItem);
          let waypoint = { id: 1 };
          let checkpoint = { id: 1 };
          let selection = { waypoint, checkpoint };
          expect(Actions.toggleComplete).to.be.calledWith(selection);
          expect(Actions.setHighlight).to.be.calledWith(selection, false);
        });

        it("adds highlight on a mouse enter", ()=> {
          let todoItem = element.querySelectorAll('.todolist_item')[0];
          Actions.setHighlight = sinon.spy();
          TestUtils.Simulate.mouseOver(todoItem);
          let waypoint = { id: 1 };
          let checkpoint = { id: 1 };
          expect(Actions.setHighlight).to.be.calledWith({ waypoint, checkpoint }, true)
        });
      });
    });
  });

});

function renderWaypoint(model, level, mode, context){
  let container = TestUtils.renderIntoDocument(
      <WaypointPanel level={ level } mode={ mode } model={ model } context={ context }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
