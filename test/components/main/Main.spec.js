import Main from '../../../src/components/main/Main.jsx';
import { React, TestUtils, fixtures, testdom } from '../../react-helpers';

describe("Main", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let { collection } = fixtures.viewModel;
    let levels = fixtures.appState.levels;
     let data = { content: '' }
    let container = TestUtils.renderIntoDocument(
      <Main levels={ levels } data={ data  } collection={ collection } url={'http://www.google.com'} />
    );

    element = React.findDOMNode(container);
  });

  it("renders the container", () => {
    expect(element.className).to.equal('layout-main');
  });

  it("renders the breadcrumbs area", () => {
    let breadcrumbs = element.querySelectorAll('.breadcrumbs');
    expect(breadcrumbs.length).to.equal(1);
  });

  it("renders the cards area if there is a collection", () => {
    let cards = element.querySelectorAll('.cards');
    expect(cards.length).to.equal(1);
  });

  it("renders the viewer if there is a url", () => {
    let viewer = element.querySelectorAll('.viewer');
    expect(viewer.length).to.equal(1);
  });

  it.skip("renders the timeline area", () => {
    let sidebar = element.querySelectorAll('.timeline');
    expect(sidebar.length).to.equal(1);
  });
});
