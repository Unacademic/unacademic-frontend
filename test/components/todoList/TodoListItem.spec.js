import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import TodoListItem from '../../../src/components/todoList/TodoListItem.jsx';

import Actions from '../../../src/actions/index.js';

describe("TodoList Item", () => {
  let element;
  let checkpoint;
  let handleHover;
  let handleClick;
  let selectElement;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [checkpoint] = fixtures.viewModel.collection[0].checkpoints;
    checkpoint.id = 1;
    handleHover = sinon.spy();
    handleClick = sinon.spy();
    selectElement = sinon.spy();
    element = renderToDoListItem(checkpoint, handleHover, selectElement, handleClick);
  })

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('todolist_item');
  });

  it("updates the complete status on checkbox click", ()=> {
      let checkbox = element.querySelector('.checkbox')
    TestUtils.Simulate.click(checkbox);
    expect(handleClick).to.be.calledWith(checkpoint.id);
  });

  it("selects the element on title click", ()=> {
    let title = element.querySelector('.title-resource')
    TestUtils.Simulate.click(title);
    expect(selectElement).to.be.calledWith({ id: 1, title: "Switch Cognitive Modes"  });
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

function renderToDoListItem(item, handleHover, selectElement, handleClick){
  let container = TestUtils.renderIntoDocument(
    <TodoListItem item={ item }
      handleHover={ handleHover }
      selectElement = { selectElement }
      handleComplete={ handleClick }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
