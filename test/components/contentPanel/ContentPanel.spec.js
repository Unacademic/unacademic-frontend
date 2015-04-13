import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ContentPanel from '../../../src/components/contentPanel/ContentPanel.jsx';

describe("Content Panel", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("model type is waypoints", () => {

    beforeEach(() => {
      let { model } = fixtures.viewModel;
      model.type = 'waypoints';
      [element] = renderPanel(model);
    });

    it("has the right class on the container", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('panel');
      expect(classes).to.contain('panel-content');
      expect(classes).to.contain('panel-top');
      expect(classes).to.contain('panel-is-waypoints');
    });

    it("has no content", () => {
      expect(element.innerHTML).to.equal('');
    });

  });

  describe("model type is something else", () => {

    beforeEach(() => {
      let [model] = fixtures.viewModel.collection;
      [element] = renderPanel(model);
    });

    it("has the right class on the container", () => {
      let classes = element.className.split(' ');
      expect(classes).to.contain('panel');
      expect(classes).to.contain('panel-content');
      expect(classes).to.contain('panel-top');
      expect(classes).to.contain('panel-is-waypoint');
    });

    it("renders the header section", () => {
      let header = element.querySelector('.panel-content_header');
      expect(header).not.to.be.null;
    });

    it("renders the main section", () => {
      let header = element.querySelector('.panel-content_main');
      expect(header).not.to.be.null;
    });

  });
});

function renderPanel(model){
  let container = TestUtils.renderIntoDocument(
    <ContentPanel model={ model }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
