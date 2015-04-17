import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import ControlPanel from '../../../src/components/controlPanel/ControlPanel.jsx';

describe("Control Panel", () => {
  let element;
  let { appState } = fixtures;

  beforeEach(() => {
    testdom('<html><body></body></html>');
    [element] = renderPanel(appState);
  });

  it("has the right class on the container", () => {
    expect(element.className).to.contain('panel');
    expect(element.className).to.contain('panel-control');
    expect(element.className).to.contain('panel-bottom');
  });

  xit("displays the authentication panel", () => {
    let authenticationPanel = element.querySelector('.panel-authentication');
    expect(authenticationPanel).not.to.be.null;
  });

  it("displays the history panel", () => {
    let historyPanel = element.querySelector('.panel-history');
    expect(historyPanel).not.to.be.null;
  });

  xit("displays the level panel", () => {
    let levelPanel = element.querySelector('.panel-level');
    expect(levelPanel).not.to.be.null;
  });

  xit("displays the mode button panel", () => {
    let modePanel = element.querySelector('.panel-modes');
    expect(modePanel).not.to.be.null;
  });
});

function renderPanel(appState){
  let container =  TestUtils.renderIntoDocument(
    <ControlPanel appState={ appState }/>
  );

  let element = React.findDOMNode(container);
  return [element];
}
