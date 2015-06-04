import React from "react";
import R from "ramda";

import Card from "./Card.jsx";

class Cards extends React.Component {
  render(){
    let { collection } = this.props;
    let createCards = R.map((model) => <Card key={ model.id } model={ model }/>);
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
