import React from 'react';
import Cards from '../cards/Cards.jsx'

class Main extends React.Component {
  render() {
    let { collection } = this.props;
    return (
      <section className="main">
        <Cards collection={ collection } className="cards" />
      </section>
    )
  }
}

Main.propTypes = {
  collection: React.PropTypes.array
}

export default Main;
