import React from 'react';
import Actions from '../../actions/index.js';

class CardNav extends React.Component {
  setViewModel(selection){
    Actions.setViewModel(selection);
  }
  render(){
    let { type, id } = this.props;
    let selection = { type, id };
    return (
      <nav className="cardNav">
        <button onClick={ this.setViewModel.bind(this, selection)} className="browse">
          Browse
        </button>
      </nav>
    )
  }
}

CardNav.propTypes = {
  id: React.PropTypes.number.isRequired,
  type: React.PropTypes.string.isRequired
}


export default CardNav;
