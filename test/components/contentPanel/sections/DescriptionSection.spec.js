import { React, TestUtils, testdom, fixtures } from '../../../react-helpers';
import DescriptionSection from '../../../../src/components/contentPanel/sections/DescriptionSection.jsx';

describe("DescriptionSection", () => {
  let element;
  let waypoint;
  let checkpoint;
  let resource;


  beforeEach(() => {
    testdom('<html><body></body></html>');
    let description = '# Hello'
    element = renderDescriptionSection(description, false);
  })

  it("has the correct classes", () => {
    let classes = element.className.split(' ');
    expect(classes).to.contain('panel_section');
  });

  it("converts the description markdown to html", () => {
    let description = element.querySelector('.description');
    expect(description.innerHTML).to.equal('<h1 id="hello">Hello</h1>\n')
  });
});

function renderDescriptionSection(description, isEditing){
  let container = TestUtils.renderIntoDocument(
      <DescriptionSection description={ description } isEditing={ isEditing }/>
  );

  let element = React.findDOMNode(container);
  return element;
}
