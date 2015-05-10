import React from 'react';
import Cards from '../cards/Cards.jsx';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs.jsx';

class Main extends React.Component {
  render() {
    let { levels, collection, url } = this.props;
    return (
      <section className="layout-main">
        <BreadCrumbs levels={ levels }></BreadCrumbs>
        { collection && <Cards collection={ collection } className="cards" /> }
        { url && <p>{ url }</p> }
      </section>
    )
  }
}

Main.propTypes = {
  collection: React.PropTypes.array,
  levels: React.PropTypes.object,
  url: React.PropTypes.string
}

export default Main;
