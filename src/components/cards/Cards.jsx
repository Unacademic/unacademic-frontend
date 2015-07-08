/*eslint no-console:0 */
/*eslint no-undef:0 */
import React from "react";
import R from "ramda";
import Actions from "../../actions/index";
import WaypointMap from "../maps/WaypointMap.jsx";
import Card from "offcourse-component-card";
import CardNav from "./CardNav.jsx";

let schema = ["title", {"meta": ["curator"]}, "summary"];

class Cards extends React.Component {

  handleComplete(modelId, item){
    let selection = this._getSelection(modelId, item);
    Actions.toggleComplete(selection);
  }

  handleHover(modelId, item, status){
    let context = "card";
    let selection = this._getSelection(modelId, item);
    Actions.setHighlight(selection, status, context);
  }

  _getSelection(modelId, item){
    let waypoint = { id: modelId };
    let checkpoint = { id: item };
    return { waypoint, checkpoint };
  }

  render(){
    let { collection } = this.props;


    let createCards = R.map((model) => {

      let handlers = {
        handleHover: this.handleHover.bind(this, model.id),
        handleComplete: this.handleComplete.bind(this, model.id)
      };

      return (
        <Card {...handlers} key={ model.id } schema={ schema } model={ model }>
          <WaypointMap { ...handlers } model={ model }/>
          <CardNav model={ model } />
        </Card>
      );
    });
    let cards = createCards(collection);

    return (
      <section className="cards">
        { cards }
      </section>
    );
  }
}

Cards.propTypes = {
  collection: React.PropTypes.array
};

export default Cards;
