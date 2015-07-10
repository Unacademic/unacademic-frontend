import React from "react";
import R from "ramda";
import CardContainer from "../../containers/CardContainer.jsx";
let waypointSchema = ["title", {"meta": ["curator"]}, "summary"];

class Cards extends React.Component {
  render(){
    let { collection } = this.props;
    let cards = R.map((model) => {
      model.schema = waypointSchema;
      return <CardContainer key={ model.id } model={ model } />;
    }, collection);

    return (
      <section className="cards">{ cards }</section>
    );
  }
}

Cards.propTypes = {
  collection: React.PropTypes.array
};

export default Cards;
