import './card.css';
import React from 'react';
import CardNav from './CardNav.jsx';

class CardCheckpoint extends React.Component {
  render(){
    let model = this.props.model;
    let type = model.constructor.name.toLowerCase();
    let classes = ['card', 'card-checkpoint'].join(' ');
    return (
      <section className={ classes }>
        <img src={ model.image }></img>
        <hgroup>
          <h1>{ model.title }</h1>
        </hgroup>
      </section>
    )
  }
}

CardCheckpoint.propTypes = {
  model: React.PropTypes.object.isRequired
}


export default CardCheckpoint;
