import React from 'react';

class ResourceListItem extends React.Component {

  render() {
    let { key, newTitle } = this.props;
    return (
      <li key={ key } className="resource_item">
        <p><span className="checkbox"></span>{ newTitle }</p>
      </li>
    )
  }
}

ResourceListItem.propTypes = {
  key: React.PropTypes.string,
  newTitle: React.PropTypes.string
};

export default ResourceListItem;