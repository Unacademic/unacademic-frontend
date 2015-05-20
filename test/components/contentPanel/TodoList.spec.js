import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import TodoList from '../../../src/components/contentPanel/TodoList.jsx';

import Actions from '../../../src/actions/index.js';

describe("TodoList Section", () => {
  let element;
  let parent;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let { checkpoints } = fixtures.viewModel.collection[0];
    parent = 1;
    element = renderToDoList(checkpoints, parent);
  })

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('panel_section');
    expect(classes).to.contain('todolist');
  });

  it("has the correct number of elements", () => {
    let todoItems = element.querySelectorAll('.todolist_item')
    expect(todoItems.length).to.equal(5);
  });

  it("checks complete when an item is clicked", ()=> {
    let todoItem = element.querySelectorAll('.todolist_item')[0];
    Actions.checkDone = sinon.spy();
    TestUtils.Simulate.click(todoItem);
    let item = 1;
    expect(Actions.checkDone).to.be.calledWith({ parent, item });
  });

});

function renderToDoList(collection, parent){
  let container = TestUtils.renderIntoDocument(
    <TodoList collection={ collection } parent={ parent }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
