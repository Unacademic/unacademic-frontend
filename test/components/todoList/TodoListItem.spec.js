import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import TodoListItem from '../../../src/components/todoList/TodoListItem.jsx';

import Actions from '../../../src/actions/index.js';

describe("TodoList Item", () => {
  let element;
  let checkpoint;
  let handleHover;
  let handleClick;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [checkpoint] = fixtures.viewModel.collection[0].checkpoints;
    checkpoint.id = 1;
    handleHover = sinon.spy();
    handleClick = sinon.spy();
    element = renderToDoListItem(checkpoint, handleHover, handleClick);
  })

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('todolist_item');
  });

  it("updates the complete status on click", ()=> {
    TestUtils.Simulate.click(element);
    expect(handleClick).to.be.calledWith(checkpoint.id);
  });

  it("highlights the model on hover", ()=> {
    TestUtils.Simulate.mouseOver(element);
    expect(handleHover).to.be.calledWith(checkpoint.id);
  });

  it("highlights the model on hover", ()=> {
    TestUtils.Simulate.mouseOut(element);
    expect(handleHover).to.be.calledWith(checkpoint.id);
  });
});

function renderToDoListItem(item, handleHover, handleClick){
  let container = TestUtils.renderIntoDocument(
    <TodoListItem item={ item } handleHover={ handleHover } checkDone={ handleClick }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
