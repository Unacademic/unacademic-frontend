import React from 'react';

import Cards from '../cards/Cards.jsx';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs.jsx';
import Viewer from '../viewer/Viewer.jsx';

class Main extends React.Component {
  constructor(){
    this.state = {
      userId: false
    }
  }

  handleClick(){
    this.setState({
      userId: 'Yeehaa'
    });
  }
  render() {
    let { levels, collection, data } = this.props;
    let { userId } = this.state;
    return (
      <section className="layout-main">
      <div className="layout-main_header">
      <BreadCrumbs levels={ levels }></BreadCrumbs>
      <ul>
      <li onClick={ this.handleClick.bind(this) }
      className="breadcrumb">{ userId || 'Log In' }</li>
      </ul>
      </div>
      { collection && <Cards collection={ collection } className="cards" /> }
      { data && <Viewer data={ data } /> }
      </section>
    )
  }
}

Main.propTypes = {
  collection: React.PropTypes.array,
  levels: React.PropTypes.object,
  data: React.PropTypes.object
}

export default Main;
