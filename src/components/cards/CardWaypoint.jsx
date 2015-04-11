import React from 'react';
import CardNav from './CardNav.jsx';

class CardWaypoint extends React.Component {
  render(){
    let model = this.props.model;
    let { image, title, id, checkpoints } = model;
    let type = model.constructor.name.toLowerCase();
    let checkpointItems = checkpoints.map((checkpoint) => <p key={ checkpoint.id }>{ checkpoint.title }</p>);
    let classes = ['card', 'card-waypoint'].join(' ');
    return (
      <section className={ classes }>
        <img src={ image }></img>
        <hgroup>
          <h1>{ title }</h1>
        </hgroup>
        <section>
          { checkpointItems }
        </section>
        <CardNav type={ type } id={ id }/>
      </section>
    )
  }
}

CardWaypoint.propTypes = {
  model: React.PropTypes.object.isRequired
}


export default CardWaypoint;
