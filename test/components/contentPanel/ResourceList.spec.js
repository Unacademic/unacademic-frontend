import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ResourceList from '../../../src/components/contentPanel/ResourceList.jsx';

describe("ResourceList", () => {
  let element;
  let cb;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    cb = sinon.spy();
    let resources = [ { title: 'first', id: 1 }, { title: 'second', id: 2 } ];
    element = renderResourceList(resources, cb)
  });

  it("renders the resourceList section", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('resourcelist');
  });

  it("has a list of resource items", () => {
    let query = element.querySelectorAll('.resource_item');
    expect(query.length).to.equal(2);
  });

  it("calls the callback on click", () => {
    let item = element.querySelectorAll('.resource_item')[0];
    TestUtils.Simulate.click(item);
    expect(cb).to.be.called;
  });
});

function renderResourceList(resources, cb){
  let container = TestUtils.renderIntoDocument(
    <ResourceList resources={ resources } selectResource={ cb }/>
  );

  return React.findDOMNode(container);
}
