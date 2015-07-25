import React, { PropTypes } from "react";

class CardNav extends React.Component {

  render(){
    const { model, selectModel } = this.props;
    const { type, id } = this.props.model;

    return (
      <nav className="card_nav">
        <button onClick={ selectModel.bind(this, id, type)} className="btn btn-inverse browse">
            Open
        </button>
      </nav>
    );
  }
}

CardNav.defaultProps = {
  selectModel: () => {}
};

CardNav.propTypes = {
  selectModel: PropTypes.func,
  model: React.PropTypes.object.isRequired
};

export default CardNav;
