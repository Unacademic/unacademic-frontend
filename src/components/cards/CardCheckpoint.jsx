import React from 'react';
import CardNav from './CardNav.jsx';

class CardCheckpoint extends React.Component {

  render(){
    let model = this.props.model;
    let { id, title, description, resources } = model;
    let type = model.constructor.name.toLowerCase();

    let resourceItems = resources.map((resource) => <p key={ resource.id }>{ resource.title }</p>);
    let classes = ['card', 'card-checkpoint'].join(' ');

    return (
      <section className={ classes }>
        <section className="order">
          <h1>{ id }</h1>
        </section>
        <hgroup>
          <h1>{ title }</h1>
        </hgroup>
        <section>
          <p>{ description }</p>
        </section>
        <section>
          { resourceItems }
        </section>
        <CardNav type={ type } id={ id }/>
      </section>
    )
  }
}

CardCheckpoint.propTypes = {
  model: React.PropTypes.object.isRequired
}


export default CardCheckpoint;
