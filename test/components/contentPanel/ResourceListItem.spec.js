import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ResourceListItem from '../../../src/components/contentPanel/ResourceListItem.jsx';

describe("ResourceListItem", () => {
  let element;
  let cb;
  let title;
  let id;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    title = 'first';
    id = 1;
    cb = sinon.spy();
    element = renderListItem(title, id, cb)
  });

  it("finds a resource item", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('resource_item');
  });

  it("calls the callback on click", () => {
    TestUtils.Simulate.click(element);
    let selection= { type: 'resource', title, id };
    expect(cb).to.be.calledWith(selection)
  });
});

function renderListItem(title, id, cb){
  let container = TestUtils.renderIntoDocument(
    <ResourceListItem handleClick={ cb } id={ id } title={ title } />
  );

  return React.findDOMNode(container);
}

