import React from "react";
import Actions from "../actions/index";
import WaypointMap from "../components/maps/WaypointMap.jsx";
import Card from "offcourse-component-card";
import CardNav from "../components/cards/CardNav.jsx";

class CardContainer extends React.Component {

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
    let { model } = this.props;
    let collectionHandlers = {
      handleHover: this.handleHover.bind(this),
      handleComplete: this.handleComplete.bind(this)
    };

    return (
      <Card {...collectionHandlers} model={ model }>
        <WaypointMap { ...collectionHandlers } model={ model }/>
        <CardNav model={ model } />
      </Card>
    );
  }
}

CardContainer.propTypes = {
  model: React.PropTypes.object.isRequired
};

export default CardContainer;
