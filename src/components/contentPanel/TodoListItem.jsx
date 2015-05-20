import React from 'react';
import R from 'ramda';
import Actions from '../../actions/index';

class TodoListItem extends React.Component {

  render() {
    let { item, checkComplete } = this.props;

    return (
      <li onClick={ checkComplete.bind(this, item.id) }className="todolist_item">
        <p><span className="checkbox"></span>{ item.title }</p>
      </li>
    )
  }
};

export default TodoListItem;
