import React from 'react';
import Actions from '../../actions/index.js';

class CardNav extends React.Component {
  browseModel(id){
    let selection = { id };
    Actions.browseModel(selection);
  }
  render(){
    let { id } = this.props;
    return (
      <nav className="cardNav">
        <button onClick={ this.browseModel.bind(this, id)} className="browse">
          Browse
        </button>
      </nav>
    )
  }
}

CardNav.propTypes = {
  id: React.PropTypes.number.isRequired
}


export default CardNav;
