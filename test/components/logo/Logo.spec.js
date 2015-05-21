import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import Logo from '../../../src/components/logo/Logo.jsx';
import Actions from '../../../src/actions/index.js';

describe("Mode logo", () => {
  let logo;
  let modes;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    modes = {
      learn: '',
      curate: ''
    };
  })

  describe("when mode is learn", () => {

    beforeEach(() => {
      modes.learn = 'active';
      logo = renderLogo(modes);
    })

    it("has the right classes", () => {
      let classes = logo.className.split(' ');
      expect(classes).to.contain('logo');
      expect(classes).to.contain('logo-is-learn');
    });

  });

  describe("when logo is curate", () => {

    beforeEach(() => {
      modes.curate = 'active'
      logo = renderLogo(modes);
    });

    it("has the right classes", () => {
      let classes = logo.className.split(' ');
      expect(classes).to.contain('logo');
      expect(classes).to.contain('logo-is-curate');
    });

  });
});

function renderLogo(modes){
  let container = TestUtils.renderIntoDocument(
    <Logo modes={ modes }/>
  );

  return React.findDOMNode(container);
}
