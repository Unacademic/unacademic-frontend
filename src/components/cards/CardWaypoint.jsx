import React from 'react';
import CardNav from './CardNav.jsx';
import CardContent from './CardContent.jsx';

class CardWaypoint extends React.Component {
  render(){
    let model = this.props.model;
    let { image, title, id, checkpoints } = model;
    let type = model.constructor.name.toLowerCase();
    let classes = ['card', 'card-waypoint'].join(' ');
    return (
      <section className={ classes }>
        <section className="card_header"></section>
        <div className="card_container">
          <CardContent model={ model }/>
          <CardNav type={ type } id={ id }/>
        </div>
      </section>
    )
  }
}

CardWaypoint.propTypes = {
  model: React.PropTypes.object.isRequired
}


export default CardWaypoint;
