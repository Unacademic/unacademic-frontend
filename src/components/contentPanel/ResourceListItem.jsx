import React from 'react';
import Actions from '../../actions/index';
import classnames from 'classnames';

class ResourceListItem extends React.Component {

  render() {
    //let { key, title } = this.props;
    let { key, title, id, handleClick } = this.props;
    let type = "resource";
    let selection = { type, title, id };

    let width = 100;
    let height = 100;
    return (
      <li className="resource_item"
        onClick={ handleClick.bind(this, selection) }>

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
  title: React.PropTypes.string,
  handleClick: React.PropTypes.func
};

export default ResourceListItem;
