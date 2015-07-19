import React, { PropTypes } from "react";

class CardNav extends React.Component {

  render(){
    let { model, selectModel } = this.props;
    let { type, title, id } = this.props.model;
    let selection = { type, title, id };

    return (
      <nav className="card_nav">
        <button onClick={ selectModel.bind(this, selection)} className="btn btn-inverse browse">
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
