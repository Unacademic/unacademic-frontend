import { React, TestUtils, testdom, fixtures } from '../../react-helpers';
import HistoryPanel from '../../../src/components/sidebar/controlPanel/historyPanel/HistoryPanel.jsx';
import Actions from '../../../src/actions/index.js';

describe("HistoryPanel Button", () => {
  let element;
  let revertHistoryButton, forwardHistoryButton;

  beforeEach(() => {
    testdom('<html><body></body></html>');
  })

  describe("initial render", () => {

    beforeEach(() => {
      [element, revertHistoryButton, forwardHistoryButton] = renderButtons();
    });

    it("has the right class on the container", () => {
      expect(element.className).to.contain('panel');
      expect(element.className).to.contain('panel-horizontal');
      expect(element.className).to.contain('panel-history');
    });
  });

  describe("place in history", () => {

    describe("when there is no earlier and no later state", () => {
      it("has both buttons disabled", () => {
        [, revertHistoryButton, forwardHistoryButton] = renderButtons(true, true);
        expect(revertHistoryButton.disabled).to.be.true;
        expect(forwardHistoryButton.disabled).to.be.true;
      });
    });

    describe("when there is no earlier state, but there is a later one", () => {
      it("has revert history button disabled", () => {
        [, revertHistoryButton, forwardHistoryButton] = renderButtons(true, false);
        expect(revertHistoryButton.disabled).to.be.true;
        expect(forwardHistoryButton.disabled).to.be.false;
      });
    });

    describe("when there is an earlier state, but there is no later one", () => {
      it("has forward history button disabled", () => {
        [, revertHistoryButton, forwardHistoryButton] = renderButtons(false, true);
        expect(revertHistoryButton.disabled).to.be.false;
        expect(forwardHistoryButton.disabled).to.be.true;
      });
    });

    describe("when there is an earlier and a later state", () => {
      it("has both buttons disabled", () => {
        [, revertHistoryButton, forwardHistoryButton] = renderButtons(false, false);
        expect(revertHistoryButton.disabled).to.be.false;
        expect(forwardHistoryButton.disabled).to.be.false;
      });
    });
  });

  describe("click handling", () => {

    beforeEach(() => {
      [element, revertHistoryButton, forwardHistoryButton] = renderButtons();
    });

    describe("when revert history is clicked", () => {

      beforeEach(() => {
        Actions.revertHistory = sinon.spy();
        React.addons.TestUtils.Simulate.click(revertHistoryButton);
      });

      it("calls the right action", () => {
        expect(Actions.revertHistory).to.be.calledOnce;
      });
    });

    describe("when forward history is clicked", () => {

      beforeEach(() => {
        [element, revertHistoryButton, forwardHistoryButton] = renderButtons();
      });

      beforeEach(() => {
        Actions.forwardHistory = sinon.spy();
        React.addons.TestUtils.Simulate.click(forwardHistoryButton);
      });

      it("calls the right action", () => {
        expect(Actions.forwardHistory).to.be.calledOnce;
      });
    });
  });
});

function renderButtons(isEarliest, isLatest){
  let container = TestUtils.renderIntoDocument(
    <HistoryPanel isEarliest={ isEarliest } isLatest={ isLatest }/>
  );

  let revertHistoryButton = React.findDOMNode(container.refs.revertHistory);
  let forwardHistoryButton = React.findDOMNode(container.refs.forwardHistory);
  let element = React.findDOMNode(container);
  return [element, revertHistoryButton, forwardHistoryButton];
}
