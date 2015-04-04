import './card.css';
import React from 'react';
import CardNav from './CardNav.jsx';

class Card extends React.Component {
  render(){
    let model = this.props.model;
    return (
      <section className="card">
        <img src={ model.image }></img>
        <hgroup>
          <h1>{ model.title }</h1>
        </hgroup>
        <CardNav id={ model.id }/>
      </section>
    )
  }
}

Card.propTypes = {
  model: React.PropTypes.object.isRequired
}


export default Card;
