import React from 'react';

class ResourceListItem extends React.Component {

  render() {
    let { key, title } = this.props;
    let width = 100;
    let height = 100;
    return (
      <li key={ key } className="resource_item">
        <p className="checkbox_container">
        <svg viewBox={ `0 0 ${width} ${height}` }width={ width } height={ height } className="handle">
        <circle cx={ width / 2 } cy={ height / 2  } r={ width / 3 } className="handle_circle"/>
          </svg>
        </p>
        <p className="resource_item_title">{ title }</p>
      </li>
    )
  }
}

ResourceListItem.propTypes = {
  key: React.PropTypes.string,
  title: React.PropTypes.string
};

export default ResourceListItem;
