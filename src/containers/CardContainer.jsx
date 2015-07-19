/*eslint no-undef:0 */
/*eslint no-console:0 */
import React from "react";
import Actions from "../actions/index";
import Card from "offcourse-component-card";
import getSchema from "./CardSchema.jsx";

class CardContainer extends React.Component {

  constructor(props){
    super(props);
  }

  selectModel(selection){
    Actions.setLevel(selection);
  }

  handleComplete(item){
    let { id } = this.props.model;
    let selection = this._getSelection(id, item);
    Actions.toggleComplete(selection);
  }

  handleHover(item, status){
    const { id } = this.props.model;
    const context = "card";
    const selection = this._getSelection(id, item);
    Actions.setHighlight(selection, status, context);
  }

  _getSelection(modelId, itemId){
    const waypoint = { id: modelId };
    const checkpoint = { id: itemId };
    return { waypoint, checkpoint };
  }

  _handlers(){
    const handleComplete = this.handleComplete.bind(this);
    const handleHover = this.handleHover.bind(this);
    const selectModel = this.selectModel.bind(this);
    const collection = { selectModel, handleComplete, handleHover };
    const model = { selectModel };
    return { collection, model };
  }

  render(){
    const { model } = this.props;
    const type = model.constructor.name.toLowerCase();
    model.type = type;
    const handlers = this._handlers();
    const schema = getSchema(type, handlers);

    return (
      <Card schema={ schema } model={ model }/>
    );
  }
}

CardContainer.propTypes = {
  model: React.PropTypes.object.isRequired
};

export default CardContainer;
