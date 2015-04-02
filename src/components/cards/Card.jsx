import './card.css';
import React from 'react';

class Card extends React.Component {
  render(){
    return (
      <section className="card">
        <img src={ this.props.model.image }></img>
        <hgroup>
          <h1>{ this.props.model.title }</h1>
        </hgroup>
        <section>
          <p>{ this.props.model.summary }</p>
        </section>
        <section>
          <p>{ this.props.model.curator }</p>
        </section>
        <section>
          { this.props.model.description.map((paragraph, index) => <p key={ index }>{ paragraph }</p>) }
        </section>
        <section>
        </section>
        <nav>
          <button>Explore</button>
          <button>Start</button>
        </nav>
      </section>
    )
  }
}

Card.propTypes = {
  model: React.PropTypes.object.isRequired
}


export default Card;
