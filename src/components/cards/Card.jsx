import './card.css';
import React from 'react';
import CardWaypoint from './CardWaypoint.jsx';
import CardCheckpoint from './CardCheckpoint.jsx';
import CardNav from './CardNav.jsx';

class Card extends React.Component {
  render(){
    let model = this.props.model;
    let type = model.constructor.name.toLowerCase();
    let card;
    switch(type){
      case 'waypoint':
        card = <CardWaypoint model={ model } type={ type }/>;
        break;
      default:
        card = <CardCheckpoint model={ model } type={ type }/>;
        break;
    }
    return card;
  }
}

Card.propTypes = {
  model: React.PropTypes.object.isRequired
}


export default Card;
