import React from 'react';

class BreadCrumbs extends React.Component {
  render() {
    return (
      <nav className="breadcrumbs">
       <ul>
          <li>WayPoints</li>
          <li>Coding the Humanities</li>
          <li>Something</li>
       </ul>
      </nav>
    )
  }
}

BreadCrumbs.propTypes = {
  collection: React.PropTypes.array
}

export default BreadCrumbs;
