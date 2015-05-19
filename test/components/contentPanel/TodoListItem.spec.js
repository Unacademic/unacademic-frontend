import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import TodoListItem from '../../../src/components/contentPanel/TodoListItem.jsx';

import Actions from '../../../src/actions/index.js';

describe("TodoList Item", () => {
  let element;
  let checkpoint;
  let cb;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    checkpoint = fixtures.viewModel.collection[0].checkpoints;
    checkpoint.id = 1;
    cb = sinon.spy();
    element = renderToDoListItem(checkpoint, cb);
  })

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('todolist_item');
  });

  it("updates the complete status on click", ()=> {
    TestUtils.Simulate.click(element);
    expect(cb).to.be.calledWith(checkpoint.id);
  });

  it("highlights the model on hover")
});

function renderToDoListItem(item, cb){
  let container = TestUtils.renderIntoDocument(
    <TodoListItem item={ item } checkComplete={ cb }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
