import React from 'react';
import Cards from '../cards/Cards.jsx';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs.jsx';
import Viewer from '../viewer/Viewer.jsx';

class Main extends React.Component {
  render() {
    let { levels, collection, url, data } = this.props;
    console.log(data);
    return (
      <section className="layout-main">
        <BreadCrumbs levels={ levels }></BreadCrumbs>
        { collection && <Cards collection={ collection } className="cards" /> }
        { url && <Viewer data={ data } /> }
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