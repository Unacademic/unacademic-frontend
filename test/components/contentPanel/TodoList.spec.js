import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import TodoList from '../../../src/components/contentPanel/TodoList.jsx';

describe("TodoList Section", () => {
  let element;
  let handleComplete;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    let { checkpoints } = fixtures.viewModel.collection[0];
    handleComplete = sinon.spy();
    element = renderToDoList(checkpoints, handleComplete);
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
    TestUtils.Simulate.click(todoItem);
    expect(handleComplete).to.be.called;
  });
});

function renderToDoList(collection, handleComplete){
  let container = TestUtils.renderIntoDocument(
    <TodoList collection={ collection } handleComplete={ handleComplete }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
