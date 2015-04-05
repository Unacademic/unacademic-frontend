import React from 'react';
import Actions from '../../actions/index.js';

class CardNav extends React.Component {
  browseModel(selection){
    Actions.browseModel(selection);
  }
  render(){
    let { type, id } = this.props;
    let selection = { type, id };
    return (
      <nav className="cardNav">
        <button onClick={ this.browseModel.bind(this, selection)} className="browse">
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
