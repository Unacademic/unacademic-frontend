import React from 'react';

class ResourceListItem extends React.Component {

  render() {
    let { key, title } = this.props;
    return (
      <li key={ key } className="resourcelist_item">
        <p><span className="checkbox"></span>{ title }</p>
      </li>
    )
  }
}

ResourceListItem.propTypes = {
  key: React.PropTypes.string,
  title: React.PropTypes.string
};

export default ResourceListItem;