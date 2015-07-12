import React from "react";
import Actions from "../actions/index";
import Card from "offcourse-component-card";

class CardContainer extends React.Component {

  constructor(props){
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.collectionHandlers = {
      handleComplete: this.handleComplete,
      handleHover: this.handleHover
    };
  }

  handleComplete(item){
    let { id } = this.props.model;
    let selection = this._getSelection(id, item);
    Actions.toggleComplete(selection);
  }

  handleHover(item, status){
    let { id } = this.props.model;
    let context = "card";
    let selection = this._getSelection(id, item);
    Actions.setHighlight(selection, status, context);
  }

  _getSelection(modelId, itemId){
    let waypoint = { id: modelId };
    let checkpoint = { id: itemId };
    return { waypoint, checkpoint };
  }

  render(){
    const { model } = this.props;
    const schema = ["map", "title", {"meta": ["curator"]}, "summary", "checkpoints", "navigation"];

    return (
      <Card {...this.collectionHandlers} schema={ schema } model={ model }/>
    );
  }
}

CardContainer.propTypes = {
  model: React.PropTypes.object.isRequired
};

export default CardContainer;
