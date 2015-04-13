import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import HeaderSection from '../../../src/components/contentPanel/HeaderSection.jsx';

describe("Header Section", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [element] = renderHeader();
  })

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('panel-content_header');
  });
});


function renderHeader(){
  let container = TestUtils.renderIntoDocument(
    <HeaderSection />
  );

  let element = React.findDOMNode(container);
  return [element];
}
