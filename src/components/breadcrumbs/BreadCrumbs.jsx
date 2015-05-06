import React from 'react';

class BreadCrumbs extends React.Component {
  render() {
    return (
      <nav className="breadcrumbs">
        <h1>WayPoints</h1>
        <h1>Coding the Humanities</h1>
        <h1>Something</h1>
      </nav>
    )
  }
}

BreadCrumbs.propTypes = {
  collection: React.PropTypes.array
}

export default BreadCrumbs;
