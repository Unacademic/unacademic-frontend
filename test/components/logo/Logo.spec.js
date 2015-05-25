import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import Logo from '../../../src/components/logo/Logo.jsx';

describe("Mode logo", () => {
  let logo;

  beforeEach(() => {
      testdom('<html><body></body></html>');
      logo = renderLogo('learn');
  })

  it("has the right classes", () => {
      let classes = logo.className.split(' ');
      expect(classes).to.contain('logo');
      expect(classes).to.contain('logo-is-learn');
  });

});

function renderLogo(mode){
  let container = TestUtils.renderIntoDocument(
    <Logo mode={ mode }/>
  );

  return React.findDOMNode(container);
}
