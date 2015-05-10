import React from 'react';
import CardNav from './CardNav.jsx';
import ContentPanel from '../contentPanel/ContentPanel.jsx';

class Card extends React.Component {
  render(){
    let model = this.props.model;
    let type = model.constructor.name.toLowerCase();
    model.type = type;

    return (
      <section className="card">
        <ContentPanel model={ model } />
        <CardNav id={ id } type={ type } />
      </section>
    )
  }
}

Card.propTypes = {
  model: React.PropTypes.object.isRequired
}


export default Card;
