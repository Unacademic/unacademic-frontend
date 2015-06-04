import React from "react";
import classnames from "classnames";

import ContentPanel from "../contentPanel/ContentPanel.jsx";
import CardNav from "./CardNav.jsx";

class Card extends React.Component {

  constructor(props){
    super(props);
    this.name = "card";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render(){
    let { model } = this.props;
    let type = model.constructor.name.toLowerCase();
    model.type = type;

    return (
      <section className={ this.classes() }>
      <ContentPanel context={ this.name } model={ model } />
      <CardNav model={ model } />
      </section>
    );
  }
}

Card.propTypes = {
  model: React.PropTypes.object.isRequired
};

export default Card;
